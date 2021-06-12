import { Module } from '@nestjs/common';
import { AppController } from './math/app.controller';
import { AppService } from './math/app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
