import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { GraphqlCodeFirstService } from './graphql-code-first.service';
import { GraphqlCodeFirst } from './entities/graphql-code-first.entity';
import { CreateGraphqlCodeFirstInput } from './dto/create-graphql-code-first.input';
import { UpdateGraphqlCodeFirstInput } from './dto/update-graphql-code-first.input';

@Resolver(() => GraphqlCodeFirst)
export class GraphqlCodeFirstResolver {
  constructor(private readonly graphqlCodeFirstService: GraphqlCodeFirstService) {}

  @Mutation(() => GraphqlCodeFirst)
  createGraphqlCodeFirst(
    @Args('createGraphqlCodeFirstInput') createGraphqlCodeFirstInput: CreateGraphqlCodeFirstInput,
  ) {
    return this.graphqlCodeFirstService.create(createGraphqlCodeFirstInput);
  }

  @Query(() => [GraphqlCodeFirst], { name: 'graphqlCodeFirst' })
  findAll() {
    return this.graphqlCodeFirstService.findAll();
  }

  @Query(() => GraphqlCodeFirst, { name: 'graphqlCodeFirst' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.graphqlCodeFirstService.findOne(id);
  }

  @Mutation(() => GraphqlCodeFirst)
  updateGraphqlCodeFirst(
    @Args('updateGraphqlCodeFirstInput') updateGraphqlCodeFirstInput: UpdateGraphqlCodeFirstInput,
  ) {
    return this.graphqlCodeFirstService.update(updateGraphqlCodeFirstInput.id, updateGraphqlCodeFirstInput);
  }

  @Mutation(() => GraphqlCodeFirst)
  removeGraphqlCodeFirst(@Args('id', { type: () => Int }) id: number) {
    return this.graphqlCodeFirstService.remove(id);
  }
}
