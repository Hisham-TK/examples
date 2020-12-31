import { Module } from '@nestjs/common';
import { MicroServiceService } from './micro-service.service';
import { MicroServiceController } from './micro-service.controller';

@Module({
  controllers: [MicroServiceController],
  providers: [MicroServiceService],
})
export class MicroServiceModule {}
