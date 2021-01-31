import { Injectable, OnModuleInit } from '@nestjs/common';
import { Client, ClientKafka, Payload, Transport } from '@nestjs/microservices';

@Injectable()
export class MathService implements OnModuleInit {
  // @Client({
  //   transport: Transport.KAFKA,
  //   options: {
  //     client: {
  //       clientId: 'controller',
  //       brokers: ['localhost:9092'],
  //     },
  //     consumer: {
  //       groupId: 'math-consumers',
  //     },
  //   },
  // })
  // client: ClientKafka;

  async onModuleInit() {
    // this.client.subscribeToResponseOf('add.nums');
    // await this.client.connect();
  }

  async accumulate(numbers: number[]) {
    // return this.client.send<number, number[]>('add.nums', numbers);

    // return await new Promise((resolve) =>
    //   this.client
    //     .send<number, number[]>('add', numbers)
    //     .subscribe((data) => resolve(data)),
    // );
  }
}
