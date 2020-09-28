// import express from 'express';
import { configs } from './common/util/configs.util';
// import { ErrorHandlerMiddleware } from './common/middleware/errorsHandler.middleware';
// import morgan from 'morgan';
// import cors from 'cors';

// const app = express();

import { connect } from 'mongoose';

console.log('\x1b[32m%s\x1b[0m', '[!] Node Environment: ', `'${configs.util?.getEnv('NODE_ENV')}'`);
console.log('\x1b[32m%s\x1b[0m', '[!] Node Version: ', `${process.version}`);

connect(
  'mongodb://root:password123@localhost:27017/?authSource=admin',
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => console.log(err || 'Connected'),
);

// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());
// app.use(cors());

// app.use(morgan('dev'));

// app.use(ErrorHandlerMiddleware);

// app.listen(configs.server.port, () =>
//   console.log('\x1b[32m%s\x1b[0m', '[!] Server starts ', `${configs.server.parsedUrl}`),
// );
