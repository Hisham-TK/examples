import { randomBytes } from 'crypto';
import { Post } from './interfaces/post.interface';
import Axios from 'axios';

const posts: { [id: string]: Post } = {};

export class PostsService {
  async create(data: Omit<Post, 'id'>): Promise<Post> {
    const { title } = data;
    const id = randomBytes(4).toString('hex');
    posts[id] = { id, title };
    await Axios.post('http://events-bus-service-cluster-ip-srv:3335/events', {
      type: 'PostCreated',
      data: posts[id],
    });
    return posts[id];
  }

  async findAll(): Promise<typeof posts> {
    return posts;
  }
}
