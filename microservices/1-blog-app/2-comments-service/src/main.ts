import express, { Request, Response } from 'express';
import { configs } from './common/util/configs.util';
import { commentsRouter } from './comments/comment.controller';
import { ErrorHandlerMiddleware } from './common/middleware/errorsHandler.middleware';
import morgan from 'morgan';
import cors from 'cors';
import Axios from 'axios';
import { postsComments } from './comments/comment.service';

const app = express();

console.log('\x1b[32m%s\x1b[0m', '[!] Node Environment: ', `'${configs.util?.getEnv('NODE_ENV')}'`);
console.log('\x1b[32m%s\x1b[0m', '[!] Node Version: ', `${process.version}`);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use(morgan('dev'));

app.use(commentsRouter);

app.post('/events', async (req: Request, res: Response) => {
  console.log('Received Event: ', req.body.type);
  const { data } = req.body;
  if (req.body.type === 'CommentModerated') {
    const { postId } = data;
    const postComments = postsComments[postId];
    const commentIndex = postComments.findIndex((_comment) => _comment.id === data.id);
    const comment = postComments[commentIndex];
    comment.status = data.status;
    setTimeout(async () => {
      await Axios.post('http://events-bus-service:3335/events', {
        type: 'CommentUpdated',
        data: { postId, ...comment },
      });
    }, 5e3);
  }
  res.send({});
});

app.use(ErrorHandlerMiddleware);

app.listen(configs.server.port, () =>
  console.log('\x1b[32m%s\x1b[0m', '[!] Server starts ', `${configs.server.parsedUrl}`),
);
