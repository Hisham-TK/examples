import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

// Create logger instance
const logger = new Logger('Main');
async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.REDIS,
      options: {
        url: 'redis://localhost:6379',
      },
    },
  );

  app.listen(() => logger.log('Micro-service is listen'));
}
bootstrap();

// import { Logger } from '@nestjs/common';
// import {
//   ClientOptions,
//   ClientProxyFactory,
//   TcpClientOptions,
//   Transport,
// } from '@nestjs/microservices';
// const logger = new Logger('Main');
// const client = ClientProxyFactory.create(
//   {
//     transport: Transport.TCP,
//     options: { host: 'localhost', port: 3001 },
//   },
//   // () => logger.log('Client is listen'),
// );

// client
//   // .send<TResult = any, TInput = any>(pattern: any, data: TInput): Observable<TResult>
//   .send<number, number[]>('add', [1, 2, 3])
//   .subscribe((data) => console.log({ data }));
