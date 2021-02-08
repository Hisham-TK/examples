import { Logger } from '@nestjs/common';
import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({ namespace: '/chat' })
export class ChatGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  private logger: Logger = new Logger('ChatGateway');
  @WebSocketServer() wss: Server;

  afterInit(/* server: Server */) {
    this.logger.log('Gateway initialized');
  }

  handleConnection(client: any /* , ...args: any[] */) {
    this.logger.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: any) {
    this.logger.log(`Client disconnected: ${client.id}`);
  }

  @SubscribeMessage('chatToServer')
  handleMessage(
    client: Socket,
    payload: { room: string; username: string; payload: string },
  ): void {
    console.log({ payload });
    this.wss.to(payload.room).emit('chatToClient', payload);
  }
}
