import { Body, Controller, Post } from '@nestjs/common';
import { NumbersDto } from './dtos/numbers.dto';
import { MathService } from './math.service';

@Controller()
export class AppController {
  constructor(private readonly appService: MathService) {}

  @Post('add')
  async add(@Body() numbersDto: NumbersDto) {
    return await this.appService.add(numbersDto);
  }
}
