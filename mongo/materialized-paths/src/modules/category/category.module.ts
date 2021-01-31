import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CATEGORY_SCHEMA_NAME } from 'src/shared/constants';
import { CategoryController } from './category.controller';
import { CategoryDocument, CategorySchema } from './category.schema';
import { CategoryService } from './category.service';

@Module({
  controllers: [
    MongooseModule.forFeature<CategoryDocument>(
      [{ name: CATEGORY_SCHEMA_NAME, schema: CategorySchema }],
      // CATEGORY_SCHEMA_NAME,
    ),
    CategoryController,
  ],
  providers: [CategoryService],
})
export class CategoryModule {}
