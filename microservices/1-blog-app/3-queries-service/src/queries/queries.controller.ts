import express, { Request, Response } from 'express';
// import { EventsService } from './queries.service';

export const queriesRouter = express.Router();
// const _queriesService = new QueriesService();

queriesRouter.post('/queries', async (req: Request, res: Response) => {
  console.log(req.body, Object.keys(res));
  // res.status(200).send(await _queriesService.create(req.body));
});
