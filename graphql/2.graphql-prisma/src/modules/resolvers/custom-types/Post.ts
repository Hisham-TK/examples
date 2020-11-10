import { GraphQLResolverMethods } from '../../../types/resolversTypes';

const postResolvers: GraphQLResolverMethods = {
  author(parent, args, { db }, info) {
    return db.users.find((_user: { id: any; }) => _user.id === parent.author);
  },
  comments(parent, args, { db }, info) {
    return db.comments.filter((_comment: { post: any; }) => _comment.post === parent.id);
  },
};

export default postResolvers;
