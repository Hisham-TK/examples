import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class GraphqlCodeFirst {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
