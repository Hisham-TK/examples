import { IsNumber } from 'class-validator';

export class NumbersDto {
  @IsNumber({}, { each: true })
  data: number[];
}
