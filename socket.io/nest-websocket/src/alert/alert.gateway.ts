import { Logger } from '@nestjs/common';
import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Socket, Client, Server } from 'socket.io';

@WebSocketGateway({ namespace: '/alert' })
export class AlertGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  private logger: Logger = new Logger('AlertGateway');
  @WebSocketServer() wss: Server;

  afterInit(server: Server) {
    this.logger.log('Gateway initialized');
  }

  handleConnection(client: Client, ...args: any[]) {
    this.logger.log(`Client connected ${client.id}`);
  }

  handleDisconnect(client: Client) {
    this.logger.log(`Client disconnected ${client.id}`);
  }

  sendToAll(message: string): void {
    this.wss.emit('alertToClient', { type: 'Alert', message });
  }
}
