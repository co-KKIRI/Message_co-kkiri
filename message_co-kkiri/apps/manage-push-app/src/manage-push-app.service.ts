import { Inject, Injectable, Logger, LoggerService } from '@nestjs/common';
import { messaging } from 'firebase-admin';
import { FirebaseService } from './firebase/firebase.service';
import { TokenMessage } from 'firebase-admin/lib/messaging/messaging-api';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ManagePushAppService {
  constructor(
    private firebaseService: FirebaseService,
    @Inject(Logger) private readonly logger: LoggerService,
    private readonly configService: ConfigService,
  ) {
    this.pushMessage();
  }

  async pushMessage(
    tokens: Array<string>,
    title: string,
    body: string,
    link: string,
    data: Object,
  ) {
    // This registration token comes from the client FCM SDKs.
    const registrationToken = this.configService.get<string>(`TEST_TOKEN`);

    const message: TokenMessage = {
      data: {
        score: '850',
        time: '2:45',
      },
      token: registrationToken,
      notification: {
        title: '테스트코드에요',
        body: '테스트코드 본문이에요',
      },
      webpush: {
        fcmOptions: {
          link: 'http://localhost',
        },
      },
    };

    try {
      const response = await messaging().send(message);
      this.logger.log(`Successfully sent message: ${response}`);
    } catch (error) {
      this.logger.error(`Error sending message:${error}`);
    }
  }
}
