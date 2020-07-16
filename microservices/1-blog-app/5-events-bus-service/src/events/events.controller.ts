import express, { Request, Response } from 'express';
import { EventsService } from './events.service';

export const eventsRouter = express.Router();
const _eventsService = new EventsService();

eventsRouter
  .route('/events')
  .get(async (_req: Request, res: Response) => {
    res.send(await _eventsService.getEvents());
  })
  .post(async (req: Request, res: Response) => {
    await _eventsService.sendToAll(req.body);
    res.status(200).send({ state: 'OK' });
  });
