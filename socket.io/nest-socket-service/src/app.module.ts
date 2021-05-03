import { Module } from '@nestjs/common';
import { SocketsModule } from './sockets/sockets.module';

@Module({
  imports: [SocketsModule],
})
export class AppModule {}
