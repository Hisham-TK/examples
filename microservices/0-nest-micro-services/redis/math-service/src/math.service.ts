import { Injectable } from '@nestjs/common';

@Injectable()
export class MathService {
  accumulate(numbers: number[]) {
    return numbers.reduce((p, c) => p + c);
  }
}
