import {
  Controller,
  Get,
  Header,
  Req,
  Res /* Request, Response */,
  Headers
} from '@nestjs/common';
import { Request, Response } from 'express';
import { ReportsService } from './reports.service';

@Controller('reports')
export class ReportsController {
  constructor(private readonly _reportsService: ReportsService) {}

  @Get('/')
  renderReportTest(@Req() req: Request, @Res() res: Response, @Header()) {
    //   renderReportTest(@Request() req: Request, @Response() res: Response) {
    // res.
    return this._reportsService.generateTempReport();
  }
}
