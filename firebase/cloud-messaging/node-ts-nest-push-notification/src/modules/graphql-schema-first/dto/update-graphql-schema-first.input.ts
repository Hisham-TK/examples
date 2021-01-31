import { CreateGraphqlSchemaFirstInput } from './create-graphql-schema-first.input';
import { PartialType } from '@nestjs/graphql';

export class UpdateGraphqlSchemaFirstInput extends PartialType(CreateGraphqlSchemaFirstInput) {
  id: number;
}
