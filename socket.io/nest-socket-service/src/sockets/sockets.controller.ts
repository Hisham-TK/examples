import {
  Body,
  Controller,
  HttpCode,
  NotFoundException,
  Post,
} from '@nestjs/common';
import { SKeys } from './socket-keys.enum';
import { SocketsGateway } from './sockets.gateway';

@Controller('sockets')
export class SocketsController {
  constructor(private readonly socketGateway: SocketsGateway) {}

  @Post()
  @HttpCode(200)
  publishEvent(@Body() dto: { key: string; message: string }) {
    // switch (dto.key) {
    //   case 'createTicket':
    //     this.socketGateway.ticketCreated();
    //     break;
    //   case 'updateTicket':
    //     this.socketGateway.ticketUpdated(dto.message);
    //     break;
    //   case 'deleteTicket':
    //     this.socketGateway.ticketDeleted(dto.message);
    //     break;
    //   default:
    //     throw new NotFoundException('Cannot subscribe not exists yet key');
    //     break;
    // }

    if (SKeys[dto.key])
      this.socketGateway.sendMessageToAll(dto.key, dto.message);
    else throw new NotFoundException('Cannot subscribe not exists yet key');
    return dto;
  }
}
