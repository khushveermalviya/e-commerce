import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { MetricsService } from './metrics.service';

@Controller()
export class MetricsController {
  constructor(private metricsService: MetricsService) {}

  @MessagePattern('get_metrics')
  async getMetrics() {
    const aws = await this.metricsService.collectAwsMetrics();
    const azure = await this.metricsService.collectAzureMetrics();
    const onPrem = await this.metricsService.collectOnPremise();
    return { aws, azure, onPrem };
  }
}