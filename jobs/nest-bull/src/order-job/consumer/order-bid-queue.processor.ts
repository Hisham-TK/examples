import { Processor, Process } from '@nestjs/bull';
import { Job } from 'bull';
import { ORDER_BID_REALTIME_JOB_QUEUE_NAME } from 'src/common/constants';

@Processor(ORDER_BID_REALTIME_JOB_QUEUE_NAME)
export class OrderBidConsumer {
  @Process()
  async transcode(job: Job<unknown>) {
    // let progress = 0;
    // for (i = 0; i < 100; i++) {
    //   await doSomething(job.data);
    //   progress += 10;
    //   job.progress(progress);
    // }
    // console.log('OrderBidConsumer -> transcode -> job', job);
    return console.log('Job done');
  }
}
