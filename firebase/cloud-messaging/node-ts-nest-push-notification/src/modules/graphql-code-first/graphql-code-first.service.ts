import { Injectable } from '@nestjs/common';
import { CreateGraphqlCodeFirstInput } from './dto/create-graphql-code-first.input';
import { UpdateGraphqlCodeFirstInput } from './dto/update-graphql-code-first.input';

@Injectable()
export class GraphqlCodeFirstService {
  create(createGraphqlCodeFirstInput: CreateGraphqlCodeFirstInput) {
    return 'This action adds a new graphqlCodeFirst';
  }

  findAll() {
    return `This action returns all graphqlCodeFirst`;
  }

  findOne(id: number) {
    return `This action returns a #${id} graphqlCodeFirst`;
  }

  update(id: number, updateGraphqlCodeFirstInput: UpdateGraphqlCodeFirstInput) {
    return `This action updates a #${id} graphqlCodeFirst`;
  }

  remove(id: number) {
    return `This action removes a #${id} graphqlCodeFirst`;
  }
}
