import { Catch, ArgumentsHost } from '@nestjs/common';
import { BaseRpcExceptionFilter } from '@nestjs/microservices';

@Catch()
export class AllExceptionsFilter extends BaseRpcExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    console.log(
      `Log ~ file: all-exceptions.filter.ts ~ line 7 ~ exception`,
      exception,
    );
    return super.catch(exception, host);
  }
}
