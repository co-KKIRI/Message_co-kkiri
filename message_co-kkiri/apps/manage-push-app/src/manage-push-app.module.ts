import { Logger, Module } from '@nestjs/common';
import { ManagePushAppController } from './manage-push-app.controller';
import { ManagePushAppService } from './manage-push-app.service';
import { ConfigModule } from '@nestjs/config';
import { FirebaseService } from './firebase/firebase.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env', '.firebase.env'],
    }),
  ],
  controllers: [ManagePushAppController],
  providers: [ManagePushAppService, FirebaseService, Logger],
})
export class ManagePushAppModule {}
