import { Module } from '@nestjs/common';
import { GraphqlCodeFirstService } from './graphql-code-first.service';
import { GraphqlCodeFirstResolver } from './graphql-code-first.resolver';

@Module({
  providers: [GraphqlCodeFirstResolver, GraphqlCodeFirstService],
})
export class GraphqlCodeFirstModule {}
