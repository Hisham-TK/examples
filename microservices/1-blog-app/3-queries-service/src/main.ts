import express, { Request, Response } from 'express';
import { configs } from './common/util/configs.util';
import { queriesRouter } from './queries/queries.controller';
import { ErrorHandlerMiddleware } from './common/middleware/errorsHandler.middleware';
import morgan from 'morgan';
import cors from 'cors';
import Axios from 'axios';

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use(morgan('dev'));

app.use(queriesRouter);

const postsWithComments: { [postId: string]: Post } = {};
interface Comment {
  id: string;
  content: string;
  status: 'rejected' | 'approved' | 'postponed';
  postId: string;
}
interface Post {
  id: string;
  title: string;
  comments: Comment[];
}

function handleEach(type: string, data: any) {
  if (type === 'PostCreated') {
    const { id, title } = data as Post;
    data.comments = [];
    postsWithComments[id] = { id, title, comments: [] };
  } else if (type === 'CommentCreated') {
    const { postId } = data as Comment;
    delete data.postId;
    postsWithComments[postId].comments.push(data);
  } else if (type === 'CommentUpdated') {
    const { postId } = data as Comment;
    delete data.postId;
    const commentIndex = postsWithComments[postId].comments.findIndex((_comment) => _comment.id === data.id);
    postsWithComments[postId].comments[commentIndex] = data;
  }
}

app.post('/events', (req: Request, res: Response) => {
  const { type, data } = req.body;
  handleEach(type, data);
  res.send({});
});
app.get('/posts', (_req: Request, res: Response) => {
  res.send(postsWithComments);
});
app.use(ErrorHandlerMiddleware);

async function syncAllEvents() {
  const { data } = await Axios.get('http://events-bus-service:3335/events');
  for (const eventKey in data) {
    if (Object.prototype.hasOwnProperty.call(data, eventKey)) {
      const event = data[eventKey];
      console.log('Process handle:', event.type);
      handleEach(event.type, event.data);
    }
  }
}
app.listen(configs.server.port, async () => {
  console.log('\x1b[32m%s\x1b[0m', '[!] Server starts ', `${configs.server.parsedUrl}`);
  try {
    await syncAllEvents();
  } catch (error) {
    setTimeout(async () => await syncAllEvents(), 500);
  }
});
