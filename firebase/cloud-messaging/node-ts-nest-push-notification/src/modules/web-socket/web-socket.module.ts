import { Module } from '@nestjs/common';
import { WebSocketService } from './web-socket.service';
import { WSGateway } from './web-socket.gateway';

@Module({
  providers: [WSGateway, WebSocketService],
})
export class WebSocketModule {}
