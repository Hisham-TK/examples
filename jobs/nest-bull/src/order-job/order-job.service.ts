import { InjectQueue } from '@nestjs/bull';
import { Injectable, OnModuleInit } from '@nestjs/common';
import { Queue, JobStatus } from 'bull';
import { ORDER_BID_REALTIME_JOB_QUEUE_NAME } from 'src/common/constants';
// import { OrderBidProducer } from './producer/order-bid-queue.service';

@Injectable()
export class OrderJobService implements OnModuleInit {
  constructor(
    @InjectQueue(ORDER_BID_REALTIME_JOB_QUEUE_NAME)
    private orderBidQueue: Queue, // private readonly OrderBidProducer: OrderBidProducer
  ) {}

  async onModuleInit() {
    await this.orderBidQueue.getJobs([]);
  }

  createJob() {
    this.orderBidQueue.add({ order: '${orderID}' }, { delay: 3000 });
    // this.orderBidQueue.getJobs(['completed', 'waiting'])
    // console.log(this.orderBidQueue.getJobs(['completed', 'waiting']))
    // this.OrderBidProducer.;
  }
  //   consumeTheQueue(){}
}
