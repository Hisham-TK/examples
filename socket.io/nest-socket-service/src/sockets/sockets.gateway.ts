import { Logger } from '@nestjs/common';
import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';
import { Socket, Client, Server } from 'socket.io';
import { SKeys } from './socket-keys.enum';

@WebSocketGateway()
export class SocketsGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  private logger: Logger = new Logger('SocketGateway');

  @WebSocketServer() wss: Server;

  afterInit(server: Server) {
    this.logger.log('Sockets gateway initialized');
    // setInterval(() => {
    //   // console.log('Sending a message to createTicket');
    //   this.sendMessageToAll(
    //     SKeys.createTicket,
    //     `{"id":"${Date.now()}","ticketType":"openAccount","status":"active"}`,
    //   );
    //   // this.wss.emit('deleteTicket', { message: 'test' });
    // }, Math.floor(Math.random() * 1e4));
  }

  handleConnection(client: Client, ...args: any[]) {
    this.logger.log(`Client connected ${client.id}`);
  }

  handleDisconnect(client: Client) {
    this.logger.log(`Client disconnected ${client.id}`);
  }

  sendMessageToAll(key: string, payload: string): void {
    console.log({ key, payload });
    this.wss.emit(key, payload);
  }

  @SubscribeMessage(SKeys.createTicket)
  createTicket(
    @MessageBody() payload?: any,
    @ConnectedSocket() client?: Socket,
  ) {
    return payload;
  }

  @SubscribeMessage(SKeys.updateTicket)
  updateTicket(
    @MessageBody() payload?: any,
    @ConnectedSocket() client?: Socket,
  ) {
    return payload;
  }

  @SubscribeMessage(SKeys.deleteTicket)
  deleteTicket(
    @MessageBody() payload?: any,
    @ConnectedSocket() client?: Socket,
  ) {
    return payload;
  }
}
