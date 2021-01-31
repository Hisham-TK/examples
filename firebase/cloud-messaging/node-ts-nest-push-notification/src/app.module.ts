import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MicroServiceModule } from './modules/micro-service/micro-service.module';
import { WebSocketModule } from './modules/web-socket/web-socket.module';
import { RestModule } from './modules/rest/rest.module';
import { GraphqlCodeFirstModule } from './modules/graphql-code-first/graphql-code-first.module';
import { GraphqlSchemaFirstModule } from './modules/graphql-schema-first/graphql-schema-first.module';

@Module({
  imports: [MicroServiceModule, WebSocketModule, RestModule, GraphqlCodeFirstModule, GraphqlSchemaFirstModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
