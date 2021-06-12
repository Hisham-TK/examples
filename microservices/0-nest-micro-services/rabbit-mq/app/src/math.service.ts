import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { NumbersDto } from './dtos/numbers.dto';

@Injectable()
export class MathService {
  // @Client({
  //   transport: Transport.RMQ,
  //   options: {
  //     urls: ['amqp://localhost:5672'],
  //     queue: 'numbers_queue',
  //   },
  // })
  // private client: ClientProxy;

  // private client: ClientProxy;
  // constructor() {
  //   const options: RmqOptions = {
  //     transport: Transport.RMQ,
  //     options: {
  //       urls: ['amqp://localhost:5672'],
  //       queue: 'numbers_queue',
  //     },
  //   };
  //   this.client = ClientProxyFactory.create(options);
  // }

  constructor(@Inject('MATH_SERVICE') private client: ClientProxy) {
    // console.log(`Log ~ file: math.service.ts ~ line 38 ~ client`, client);
  }

  async add(numbers: NumbersDto) {
    // const result = await this.client.emit('sum', numbers).toPromise();
    return await this.client.send<number>('sum', numbers).toPromise();
  }
}
