import { GraphQLResolverMethods } from '../../../types/resolversTypes';

const userResolvers: GraphQLResolverMethods = {
  posts(parent, args, { db }, info) {
    return db.posts.filter((_post: { author: any; }) => _post.author === parent.id);
    // return parent.db.posts.map((_postId) => db.posts.find((_post) => _post.id === _postId));
  },
  comments(parent, args, { db }, info) {
    return db.comments.filter((_comment: { author: any; }) => _comment.author === parent.id);
  },
};

export default userResolvers;
