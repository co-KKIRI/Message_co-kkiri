import { Injectable } from '@nestjs/common';

@Injectable()
export class ManagePushAppService {
  getHello(): string {
    return 'Hello World!';
  }
}
