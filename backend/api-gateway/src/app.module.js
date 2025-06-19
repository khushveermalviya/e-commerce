import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { MetricsController } from './metrics/metrics.controller';
import { AlertsController } from './alerts/alerts.controller';
import { PredictionsController } from './predictions/predictions.controller';
import { RemediationController } from './remediation/remediation.controller';

@Module({
  imports: [
    ConfigModule.forRoot(),
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'secret',
      signOptions: { expiresIn: '1h' },
    }),
    ClientsModule.register([
      {
        name: 'DATA_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: { brokers: ['localhost:9092'] },
          consumer: { groupId: 'data-consumer' },
        },
      },
      {
        name: 'ANALYTICS_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: { brokers: ['localhost:9092'] },
          consumer: { groupId: 'analytics-consumer' },
        },
      },
      // Add other services
    ]),
  ],
  controllers: [
    AuthController,
    MetricsController,
    AlertsController,
    PredictionsController,
    RemediationController,
  ],
  providers: [AuthService],
})
export class AppModule {}