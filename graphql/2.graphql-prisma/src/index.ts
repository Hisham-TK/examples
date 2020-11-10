import { GraphQLServer, PubSub } from 'graphql-yoga';
import { join } from 'path';
import resolvers from './modules/resolvers';
import db from './db';
import { configs } from './common/config';

const pubsub = new PubSub();

const server = new GraphQLServer({
  typeDefs: join(process.cwd(), 'schema.graphql'),
  resolvers,
  context: { db, pubsub },
});

server.start({ port: configs.server.port }, (opts) => {
  console.log(
    `Server starts on port: http://localhost:${opts.port}${opts.endpoint}`,
  );
});
