import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { OrderJobModule } from './order-job/order-job.module';

@Module({
  imports: [
    OrderJobModule,
    BullModule.forRoot({
      // prefix: 'hsa-bull',
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
  ],
  // controllers: [],
  // providers: [],
})
export class AppModule {}

// @OnGlobalQueueCompleted()
// async onGlobalCompleted(jobId: number, result: any) {
//   const job = await this.immediateQueue.getJob(jobId);
//   console.log('(Global) on completed: job ', job.id, ' -> result: ', result);
// }
