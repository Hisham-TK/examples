import { GraphQLResolverMethods } from '../../../types/resolversTypes';

const postResolvers: GraphQLResolverMethods = {
  author(parent, args, { db }, info) {
    return db.users.find((_user) => _user.id === parent.author);
  },
  comments(parent, args, { db }, info) {
    return db.comments.filter((_comment) => _comment.post === parent.id);
  },
};

export default postResolvers;
