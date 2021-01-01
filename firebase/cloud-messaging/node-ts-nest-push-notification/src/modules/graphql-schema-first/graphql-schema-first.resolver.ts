import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { GraphqlSchemaFirstService } from './graphql-schema-first.service';
import { CreateGraphqlSchemaFirstInput } from './dto/create-graphql-schema-first.input';
import { UpdateGraphqlSchemaFirstInput } from './dto/update-graphql-schema-first.input';

@Resolver('GraphqlSchemaFirst')
export class GraphqlSchemaFirstResolver {
  constructor(private readonly graphqlSchemaFirstService: GraphqlSchemaFirstService) {}

  @Mutation('createGraphqlSchemaFirst')
  create(@Args('createGraphqlSchemaFirstInput') createGraphqlSchemaFirstInput: CreateGraphqlSchemaFirstInput) {
    return this.graphqlSchemaFirstService.create(createGraphqlSchemaFirstInput);
  }

  @Query('graphqlSchemaFirst')
  findAll() {
    return this.graphqlSchemaFirstService.findAll();
  }

  @Query('graphqlSchemaFirst')
  findOne(@Args('id') id: number) {
    return this.graphqlSchemaFirstService.findOne(id);
  }

  @Mutation('updateGraphqlSchemaFirst')
  update(@Args('updateGraphqlSchemaFirstInput') updateGraphqlSchemaFirstInput: UpdateGraphqlSchemaFirstInput) {
    return this.graphqlSchemaFirstService.update(updateGraphqlSchemaFirstInput.id, updateGraphqlSchemaFirstInput);
  }

  @Mutation('removeGraphqlSchemaFirst')
  remove(@Args('id') id: number) {
    return this.graphqlSchemaFirstService.remove(id);
  }
}
