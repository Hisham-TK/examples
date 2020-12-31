import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CategoryDocument = Category & Document;

@Schema()
export class Category {
  @Prop()
  id: string;

  @Prop()
  path: string;

  // @Prop()
  // age: number;

  // @Prop()
  // breed: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
