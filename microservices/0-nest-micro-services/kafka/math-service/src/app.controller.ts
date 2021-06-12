import { Controller, Logger } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { MathService } from './math.service';

@Controller()
export class AppController {
  private logger = new Logger('AppController');
  constructor(private readonly mathService: MathService) {}

  @MessagePattern('add.nums')
  add(@Payload() message: any): number {
    const numbers = message.value;
    this.logger.log('Adding ' + numbers.toString());

    return this.mathService.accumulate(numbers);
  }
}
