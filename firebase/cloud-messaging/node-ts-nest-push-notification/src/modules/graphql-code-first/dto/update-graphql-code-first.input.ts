import { CreateGraphqlCodeFirstInput } from './create-graphql-code-first.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateGraphqlCodeFirstInput extends PartialType(CreateGraphqlCodeFirstInput) {
  @Field(() => Int)
  id: number;
}
