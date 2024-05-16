import admin from 'firebase-admin/app';
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { FirebaseAdminConfig } from './interfaces/firebase.interface';

@Injectable()
export class FirebaseService {
  private readonly app;

  constructor(private configService: ConfigService) {
    if (!this.app) {
      const firebaseAdminConfig: FirebaseAdminConfig = {
        type: this.configService.get<string>(`FIREBASE_TYPE`),
        projectId: this.configService.get<string>(`FIREBASE_PROJECT_ID`),
        privateKeyId: this.configService.get<string>(`FIREBASE_PRIVATE_KEY_ID`),
        privateKey: this.configService.get<string>(`FIREBASE_PRIVATE_KEY`),
        clientEmail: this.configService.get<string>(`FIREBASE_CLIENT_EMAIL`),
        clientId: this.configService.get<string>(`FIREBASE_CLIENT_ID`),
        authUri: this.configService.get<string>(`FIREBASE_AUTH_URI`),
        tokenUri: this.configService.get<string>(`FIREBASE_TOKEN_URI`),
        authProviderX509CertUrl: this.configService.get<string>(
          `AUTH_PROVIDER_X509_CERT_URL`,
        ),
        clientX509CertUrl: this.configService.get<string>(
          `FIREBASE_CLIENT_X509_CERT_URL`,
        ),
        universeDomain: this.configService.get<string>(
          `FIREBASE_UNIVERSE_DOMAIN`,
        ),
      };

      try {
        this.app = admin.initializeApp({
          credential: admin.cert(firebaseAdminConfig),
        });

        Logger.log('Firebase Service Start');
      } catch (error) {
        Logger.error(error);
      }
    }
  }
}
