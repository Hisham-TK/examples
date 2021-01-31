import { Injectable } from '@nestjs/common';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';

@Injectable()
export class MathService {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: { host: 'localhost', port: 3000 },
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
