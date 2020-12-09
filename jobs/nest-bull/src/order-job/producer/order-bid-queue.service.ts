import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';
import { InjectQueue } from '@nestjs/bull';
import { ORDER_BID_REALTIME_JOB_QUEUE_NAME } from 'src/common/constants';

@Injectable()
export class OrderBidProducer {
  constructor(
    @InjectQueue(ORDER_BID_REALTIME_JOB_QUEUE_NAME) private orderBidQueue: Queue
  ) {
    // console.log({orderBidQueue});
  }
  
}
