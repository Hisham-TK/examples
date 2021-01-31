import { Body, Controller, Logger, Post } from '@nestjs/common';
import { MathService } from './math.service';

@Controller()
export class AppController {
  private logger = new Logger('AppController');

  constructor(private readonly mathService: MathService) {}

  @Post('add')
  add(@Body('data') numbers: number[]): number {
    this.logger.log('Adding ' + numbers.toString());
    return this.mathService.accumulate(numbers);
  }
}
