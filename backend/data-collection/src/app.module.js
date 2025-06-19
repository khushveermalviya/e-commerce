import { Module } from '@nestjs/common';
import { MetricsService } from './metrics/metrics.service';
import { MetricsController } from './metrics/metrics.controller';

@Module({
  controllers: [MetricsController],
  providers: [MetricsService],
})
export class AppModule {}