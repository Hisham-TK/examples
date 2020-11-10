import { MutationResolvers } from '../../../types/resolversTypes';
import { Post } from '../../interfaces/Post';
import { MutationStatus } from '../../interfaces/types';
import { v4 as uuid } from 'uuid';
import { createSubscriptionMessage } from '../../../common/helpers/createPostMessage';

const mutationResolvers: MutationResolvers<Post> = {
  create(parent, { data }: { data: Omit<Post, 'id'> }, { db, pubsub }, info) {
    const userExists = db.users.find((_user) => _user.id === data.author);
    if (!userExists) throw new Error('Author is not exists');
    const post = { id: uuid(), ...data };
    db.posts.push(post);
    if (post.published)
      pubsub.publish(
        `post`,
        createSubscriptionMessage('post', 'CREATED', post),
      );
    return post;
  },

  update(parent, { data, id }, { db, pubsub }, info) {
    const postIndex = db.posts.findIndex((_post) => _post.id === id);
    if (postIndex === -1) throw new Error('Post not exists');
    const originalPost = { ...db.posts[postIndex] };

    const updatedPost = (db.posts[postIndex] = {
      ...db.posts[postIndex],
      ...data,
    });

    let mutationStatus: MutationStatus = null;
    if (originalPost.published && !updatedPost.published) {
      mutationStatus = 'DELETED';
    } else if (!originalPost.published && updatedPost.published) {
      mutationStatus = 'CREATED';
    } else if (updatedPost.published) {
      mutationStatus = 'UPDATED';
    }
    if (mutationStatus)
      pubsub.publish(
        'post',
        createSubscriptionMessage('post', mutationStatus, updatedPost),
      );

    return updatedPost;
  },

  delete(parent, { id }, { db, pubsub }, info) {
    const postIndex = db.posts.findIndex((_post) => _post.id === id);
    if (postIndex === -1) throw new Error('Post not exists');
    const [deletedPost] = db.posts.splice(postIndex, 1);
    db.comments = db.comments.filter((_comment) => _comment.post !== id);
    pubsub.publish(
      'post',
      createSubscriptionMessage('post', 'DELETED', deletedPost),
    );
    return deletedPost;
  },
};

export default mutationResolvers;
