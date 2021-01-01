import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { WebSocketService } from './web-socket.service';
import { CreateWebSocketDto } from './dto/create-web-socket.dto';
import { UpdateWebSocketDto } from './dto/update-web-socket.dto';

@WebSocketGateway()
export class WSGateway {
  constructor(private readonly webSocketService: WebSocketService) {}

  @SubscribeMessage('createWebSocket')
  create(@MessageBody() createWebSocketDto: CreateWebSocketDto) {
    return this.webSocketService.create(createWebSocketDto);
  }

  @SubscribeMessage('findAllWebSocket')
  findAll() {
    return this.webSocketService.findAll();
  }

  @SubscribeMessage('findOneWebSocket')
  findOne(@MessageBody() id: number) {
    return this.webSocketService.findOne(id);
  }

  @SubscribeMessage('updateWebSocket')
  update(@MessageBody() updateWebSocketDto: UpdateWebSocketDto) {
    return this.webSocketService.update(updateWebSocketDto.id, updateWebSocketDto);
  }

  @SubscribeMessage('removeWebSocket')
  remove(@MessageBody() id: number) {
    return this.webSocketService.remove(id);
  }
}
