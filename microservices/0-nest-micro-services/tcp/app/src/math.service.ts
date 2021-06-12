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
    /* Emit: send value without return a response */
    // return await this.client.emit('add', numbers).toPromise();

    /* Send: send value and wait for the result */
    return this.client.send<number, number[]>('add', numbers);

    // return await this.client.send<number, number[]>('add', numbers).toPromise();
  }
}
