import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateGraphqlCodeFirstInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
