import express, { Request, Response } from 'express';
import { configs } from './common/util/configs.util';
import { moderationRouter } from './moderation/moderation.controller';
import { ErrorHandlerMiddleware } from './common/middleware/errorsHandler.middleware';
import morgan from 'morgan';
import cors from 'cors';
import Axios from 'axios';

const app = express();

console.log('\x1b[32m%s\x1b[0m', '[!] Node Environment: ', `'${configs.util?.getEnv('NODE_ENV')}'`);
console.log('\x1b[32m%s\x1b[0m', '[!] Node Version: ', `${process.version}`);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use(morgan('dev'));

app.use(moderationRouter);

interface Comment {
  id: string;
  content: string;
  postId: string;
  status: 'rejected' | 'approved' | 'postponed';
}

const blockListWords = ['orange'];

app.post('/events', async (req: Request, res: Response) => {
  console.log('Received Event: ', req.body.type);
  if (req.body.type === 'CommentCreated') {
    if (new RegExp(blockListWords.join('|'), 'i').test(req.body.data.content)) {
      req.body.data.status = 'rejected';
    } else {
      req.body.data.status = 'approved';
    }
    await Axios.post('http://events-bus-service:3335/events', { type: 'CommentModerated', data: req.body.data as Comment });
  }
  res.send({});
});
app.use(ErrorHandlerMiddleware);

app.listen(configs.server.port, () =>
  console.log('\x1b[32m%s\x1b[0m', '[!] Server starts ', `${configs.server.parsedUrl}`),
);
