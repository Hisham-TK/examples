import { randomBytes } from 'crypto';
import { Comment } from './interfaces/comment.interface';
import Axios from 'axios';

export const postsComments: { [postId: string]: Comment[] } = {};

export class CommentsService {
  async create(data: Omit<Comment, 'id'>, postId: string): Promise<Comment> {
    const id = randomBytes(4).toString('hex');
    if (!postsComments[postId]) postsComments[postId] = [];
    const no = postsComments[postId].push({ id, ...data, status: 'postponed' });
    const comment = postsComments[postId][no - 1];
    await Axios.post('http://events-bus-service:3335/events', {
      type: 'CommentCreated',
      data: { postId, ...comment },
    });
    return comment;
  }

  async findAll(postId: string): Promise<Comment[]> {
    return postsComments[postId] || [];
  }
}
