import { Module } from '@nestjs/common';
import { ManagePushAppController } from './manage-push-app.controller';
import { ManagePushAppService } from './manage-push-app.service';

@Module({
  imports: [],
  controllers: [ManagePushAppController],
  providers: [ManagePushAppService],
})
export class ManagePushAppModule {}
