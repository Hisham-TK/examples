import { Injectable } from '@nestjs/common';
import {
  ClientProxy,
  ClientProxyFactory,
  RedisOptions,
  Transport,
} from '@nestjs/microservices';

@Injectable()
export class MathService {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create(<RedisOptions>{
      transport: Transport.REDIS,
      options: { url: 'redis://localhost:6379', db: '1' },
    });
  }

  async accumulate(numbers: number[]) {
    return this.client.send<number, number[]>('add', numbers);
    // const res = await new Promise((resolve) =>
    //   this.client
    //     .send<number, number[]>('add', numbers)
    //     .subscribe((data) => resolve(data)),
    // );
    // return res;
  }
}
