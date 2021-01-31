import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
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
