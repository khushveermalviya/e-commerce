import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { RemediationService } from './remediation.service';

@Controller()
export class RemediationController {
  constructor(private remediationService: RemediationService) {}

  @MessagePattern('remediate')
  async remediate(data: { cloud: string; resource: string }) {
    if (data.cloud === 'aws') {
      return this.remediationService.scaleAwsInstance(data.resource);
    } else if (data.cloud === 'azure') {
      return this.remediationService.scaleAzureVm('YOUR_RG', data.resource);
    }
  }
}