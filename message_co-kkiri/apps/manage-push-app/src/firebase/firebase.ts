import { initializeApp } from 'firebase-admin';
import { App } from 'firebase-admin/app';

export class Firebase {
  app: App;

  constructor() {
    if (this.app) return;

    this.app = initializeApp();
  }
}
