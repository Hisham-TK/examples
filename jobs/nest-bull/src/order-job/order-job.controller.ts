import { Controller, /* Get, */ Post } from '@nestjs/common';
import { OrderJobService } from './order-job.service';

@Controller('order-job')
export class OrderJobController {
  constructor(private readonly orderJobService: OrderJobService) {}

  @Post('/')
  createJob() {
    return this.orderJobService.createJob();
  }
}
