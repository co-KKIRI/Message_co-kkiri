import { Controller, Get } from '@nestjs/common';
import { ManagePushAppService } from './manage-push-app.service';

@Controller()
export class ManagePushAppController {
  constructor(private readonly managePushAppService: ManagePushAppService) {}

  @Get()
  getHello(): string {
    return this.managePushAppService.getHello();
  }
}
