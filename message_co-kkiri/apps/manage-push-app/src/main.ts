import { NestFactory } from '@nestjs/core';
import { ManagePushAppModule } from './manage-push-app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(ManagePushAppModule);
  const configService = app.get(ConfigService);

  const user = configService.get('RABBITMQ_USER');
  const password = configService.get('RABBITMQ_PASSWORD');
  const host = configService.get('RABBITMQ_HOST');
  const queueName = configService.get('RABBITMQ_QUEUE_NAME');

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: [`amqps://${user}:${password}@${host}`],
      queue: queueName,
      queueOptions: {
        durable: false,
      },
    },
  });

  await app.startAllMicroservices();

  Logger.log('Service Start');
}
bootstrap();
