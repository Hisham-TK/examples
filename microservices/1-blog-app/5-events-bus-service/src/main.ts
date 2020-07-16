import express from 'express';
import { configs } from './common/util/configs.util';
import { eventsRouter } from './events/events.controller';
import { ErrorHandlerMiddleware } from './common/middleware/errorsHandler.middleware';
import morgan from 'morgan';
import cors from 'cors';

const app = express();

console.log('\x1b[32m%s\x1b[0m', '[!] Node Environment: ', `'${configs.util?.getEnv('NODE_ENV')}'`);
console.log('\x1b[32m%s\x1b[0m', '[!] Node Version: ', `${process.version}`);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use(morgan('dev'));

app.use(eventsRouter);

app.use(ErrorHandlerMiddleware);

app.listen(configs.server.port, () =>
  console.log('\x1b[32m%s\x1b[0m', '[!] Server starts ', `${configs.server.parsedUrl}`),
);
