import { NestFactory } from '@nestjs/core';
import { ManagePushAppModule } from './manage-push-app.module';

async function bootstrap() {
  const app = await NestFactory.create(ManagePushAppModule);
  await app.listen(3000);
}
bootstrap();
