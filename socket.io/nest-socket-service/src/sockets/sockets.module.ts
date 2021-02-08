import { Module } from '@nestjs/common';
import { SocketsController } from './sockets.controller';
import { SocketsGateway } from './sockets.gateway';

@Module({
  controllers: [SocketsController],
  providers: [SocketsGateway],
})
export class SocketsModule {}
