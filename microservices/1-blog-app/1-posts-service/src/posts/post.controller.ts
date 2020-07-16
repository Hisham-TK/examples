import express, { Request, Response } from 'express';
import { PostsService } from './post.service';

export const postsRouter = express.Router();
const _postsService = new PostsService();

postsRouter
  .route('/posts')
  .get(async (_req: Request, res: Response) => {
    res.send(await _postsService.findAll());
  })
  .post(async (req: Request, res: Response) => {
    res.status(201).send(await _postsService.create(req.body));
  });
