import Query from './Query';
import Mutation from './Mutation';
import Subscription from './Subscription';
import customTypes from './custom-types';

/*
Graph QL Resolvers
*/
export default {
  Query,
  Mutation,
  Subscription,
  ...customTypes,
};
