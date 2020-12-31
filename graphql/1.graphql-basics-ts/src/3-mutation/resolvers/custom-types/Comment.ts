import { GraphQLResolverMethods } from '../../../types/resolversTypes';

const commentResolvers: GraphQLResolverMethods = {
  post(parent, args, { db }, info) {
    return db.posts.find((_post) => _post.id === parent.post);
  },
  author(parent, args, { db }, info) {
    return db.users.find((_user) => _user.id === parent.author);
  },
};

export default commentResolvers;
