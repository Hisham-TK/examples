import { GraphQLServer } from 'graphql-yoga';
import config from 'config';

// Types definition (Application schema): define all the operations and what data looks like
const typeDefs = `
type Query {
    hello: String!
    name: String!
    location: String!
    bio: String!
}
`;
// Resolvers
const resolvers = {
  Query: {
    hello() {
      return 'Hi there!';
    },
    name() {
      return 'Hisham Taha';
    },
    location() {
      return 'Alexandria';
    },
    bio() {
      return 'I live in Alex and work in Ismallima as Software Developer';
    },
  },
};

const server = new GraphQLServer({ typeDefs, resolvers });

server.start(
  {
    port: config.server.port,
  },
  (opts) => {
    console.log(`Server start on ${opts.port}`);
  },
);
