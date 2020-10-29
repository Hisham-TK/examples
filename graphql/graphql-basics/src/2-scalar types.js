import { GraphQLServer } from 'graphql-yoga';
import config from 'config';

// Types definition (Application schema): define all the operations and what data looks like
const typeDefs = `
type Query {
  id: ID!
  name: String!
  age: Int!
  employed: Boolean!
  gpa: Float

  title: String!
  price: Float!
  releaseYear: Int
  rate: Float
  inStock: Boolean!
}
`;
// Resolvers
const resolvers = {
  Query: {
    id() {
      return '1';
    },
    name() {
      return 'Hisham';
    },
    age() {
      return 26;
    },
    employed() {
      return true;
    },
    gpa() {
      return 4.7;
      // return null;
    },

    // Task
    title() {
      return 'An title';
    },
    price() {
      return 3.8;
    },
    releaseYear() {
      return 1994;
      // return null;
    },
    rate() {
      return 8.1;
      // return null;
    },
    inStock() {
      return true;
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
