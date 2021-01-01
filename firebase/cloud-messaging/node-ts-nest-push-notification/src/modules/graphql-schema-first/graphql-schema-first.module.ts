import { Module } from '@nestjs/common';
import { GraphqlSchemaFirstService } from './graphql-schema-first.service';
import { GraphqlSchemaFirstResolver } from './graphql-schema-first.resolver';

@Module({
  providers: [GraphqlSchemaFirstResolver, GraphqlSchemaFirstService],
})
export class GraphqlSchemaFirstModule {}
