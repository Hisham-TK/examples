import { GraphQLResolverMethods } from '../../types/resolversTypes';

const subscriptionResolvers: GraphQLResolverMethods = {
  comment: {
    subscribe(parent, { postId }, { pubsub, db }, info) {
      const post = db.posts.find((_post: { id: any }) => _post.id === postId);
      if (!post) throw new Error('Post is not found');
      else if (!post.published) throw new Error('Post not published');
      return pubsub.asyncIterator(`comment/${postId}`);
    },
  },
  post: {
    subscribe(parent, args, { db, pubsub }, info) {
      return pubsub.asyncIterator('post');
    },
  },
};

export default subscriptionResolvers;
