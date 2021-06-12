import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { MathService } from './math.service';

@Module({
  imports: [
    // ClientsModule.register([
    //   {
    //     name: 'MATH_SERVICE',
    //     transport: Transport.KAFKA,
    //     options: {
    //       client: {
    //         clientId: 'controller',
    //         brokers: ['localhost:9092'],
    //       },
    //       consumer: {
    //         groupId: 'math-consumers',
    //       },
    //     },
    //   },
    // ]),
  ],
  controllers: [AppController],
  providers: [MathService],
})
export class AppModule {}
