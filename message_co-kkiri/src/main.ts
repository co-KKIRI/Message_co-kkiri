import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [`amqp://localhost:5672`],
        queue: 'messages_queue',
        queueOptions: {
          durable: false,
        },
      },
    },
  );

  await app.listen();
  Logger.log('Service Start');
}
bootstrap();
