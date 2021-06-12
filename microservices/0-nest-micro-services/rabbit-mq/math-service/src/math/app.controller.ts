import { Controller } from '@nestjs/common';
import {
  Ctx,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';
import { AppService } from './app.service';
import { NumbersDto } from './dtos/numbers.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('sum')
  async sumHandler(
    @Ctx() context: RmqContext,
    @Payload() numbersDto: NumbersDto,
    // @Payload() data: number[],
    // @Payload(ParseArrayPipe, ParseIntPipe) data: number[],
    // @Data('data2') data: NumberDto,
  ) /* : Promise<number> */ {
    const res = await this.appService.accumulate(numbersDto.data);
    // console.log(`Log ~ file: app.controller.ts ~ line 21 ~ data`, {
    //   numbersDto,
    //   res,
    // });
    return res;
  }
}
