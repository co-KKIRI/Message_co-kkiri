import { Module } from '@nestjs/common';
import { ManagePushAppController } from './manage-push-app.controller';
import { ManagePushAppService } from './manage-push-app.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [ManagePushAppController],
  providers: [ManagePushAppService],
})
export class ManagePushAppModule {}
