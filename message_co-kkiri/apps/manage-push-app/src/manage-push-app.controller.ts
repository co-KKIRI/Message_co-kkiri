import { Controller, Post } from '@nestjs/common';
import { ManagePushAppService } from './manage-push-app.service';

@Controller()
export class ManagePushAppController {
  constructor(private readonly managePushAppService: ManagePushAppService) {}

  @Post()
  pushMessage(): Promise<void> {
    this.managePushAppService.pushMessage();

    return;
  }
}
