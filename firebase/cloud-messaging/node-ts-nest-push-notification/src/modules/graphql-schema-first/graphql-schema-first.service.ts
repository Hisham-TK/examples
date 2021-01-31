import { Injectable } from '@nestjs/common';
import { CreateGraphqlSchemaFirstInput } from './dto/create-graphql-schema-first.input';
import { UpdateGraphqlSchemaFirstInput } from './dto/update-graphql-schema-first.input';

@Injectable()
export class GraphqlSchemaFirstService {
  create(createGraphqlSchemaFirstInput: CreateGraphqlSchemaFirstInput) {
    return 'This action adds a new graphqlSchemaFirst';
  }

  findAll() {
    return `This action returns all graphqlSchemaFirst`;
  }

  findOne(id: number) {
    return `This action returns a #${id} graphqlSchemaFirst`;
  }

  update(id: number, updateGraphqlSchemaFirstInput: UpdateGraphqlSchemaFirstInput) {
    return `This action updates a #${id} graphqlSchemaFirst`;
  }

  remove(id: number) {
    return `This action removes a #${id} graphqlSchemaFirst`;
  }
}
