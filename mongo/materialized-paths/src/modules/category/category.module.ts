import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';

@Module({
  controllers: [
    MongooseModule.forFeature([{ name: Cat.name, schema: CategorySchema }]),
    CategoryController,
  ],
  providers: [CategoryService],
})
export class CategoryModule {}
