import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async accumulate(numbers: number[]): Promise<number> {
    return await numbers.reduce((p, c) => p + c);
  }
}
