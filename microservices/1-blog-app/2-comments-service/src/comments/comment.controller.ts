import express, { Request, Response } from 'express';
import { CommentsService } from './comment.service';

export const commentsRouter = express.Router();
const _commentsService = new CommentsService();

commentsRouter
  .route('/posts/:postId/comments')
  .get(async (req: Request, res: Response) => {
    const { postId } = req.params;
    res.send(await _commentsService.findAll(postId));
  })
  .post(async (req: Request, res: Response) => {
    const { postId } = req.params;
    res.status(201).send(await _commentsService.create(req.body, postId));
  });

// commentsRouter
//   .route('/posts/:postId/comments/:commentId')
//   .get(async (req: Request, res: Response) => {
//     const postId = req.params.postId;
//     const commentId = req.params.commentId;
//     res.send(_commentsService.findById(postId, commentId));
//   })
//   .patch(async (req: Request, res: Response) => {
//     const postId = req.params.postId;
//     const commentId = req.params.commentId;
//     res.status(202).send(_commentsService.findById(postId, commentId));
//   })
//   .delete(async (req: Request, res: Response) => {
//     const postId = req.params.postId;
//     const commentId = req.params.commentId;
//     res.status(204).send(_commentsService.findById(postId, commentId));
//   });
