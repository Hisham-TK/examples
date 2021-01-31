import { Controller, Logger } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { MathService } from './math.service';

@Controller()
export class AppController {
  private logger = new Logger('AppController');
  constructor(private readonly mathService: MathService) {}

  @MessagePattern('add')
  add(numbers: number[]): number {
    this.logger.log('Adding ' + numbers.toString());
    return this.mathService.accumulate(numbers);
  }
}
