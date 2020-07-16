import express, { Request, Response } from 'express';
// import { EventsService } from './moderation.service';

export const moderationRouter = express.Router();
// const _moderationService = new ModerationService();

moderationRouter.post('/moderation', async (req: Request, res: Response) => {
  console.log(req.body, Object.keys(res));
  // res.status(200).send(await _moderationService.create(req.body));
});
