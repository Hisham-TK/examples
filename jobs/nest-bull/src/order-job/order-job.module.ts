import { Module } from '@nestjs/common';
import { OrderJobService } from './order-job.service';
// import { OnCreateOrderService } from './processors/on-create-order.service';
// import { OnUpdateOrderService } from './processors/on-update-order.service';
// import { OrderBidQueueService } from './producer/order-bid-queue.service';
import { BullModule } from '@nestjs/bull';
import { OrderJobController } from './order-job.controller';
import { OrderBidConsumer } from './consumer/order-bid-queue.processor';
import { ORDER_BID_REALTIME_JOB_QUEUE_NAME } from 'src/common/constants';

@Module({
  imports: [BullModule.registerQueue({ name: ORDER_BID_REALTIME_JOB_QUEUE_NAME }), ],
  providers: [OrderJobService, /* OrderBidQueueService, */OrderBidConsumer ],
  controllers: [OrderJobController],
})
export class OrderJobModule {}
