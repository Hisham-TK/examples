import { GraphQLServer, PubSub } from 'graphql-yoga';
import { join } from 'path';
import resolvers from './3-mutation/resolvers';
import db from './3-mutation/db';
import { configs } from './common/config';

const pubsub = new PubSub();

const server = new GraphQLServer({
  typeDefs: join(__dirname, '3-mutation', 'schema.graphql'),
  resolvers,
  context: { db, pubsub },
});

server.start({ port: configs.server.port }, (opts) => {
  console.log(
    `Server starts on port: http://localhost:${opts.port}${opts.endpoint}`,
  );
});
