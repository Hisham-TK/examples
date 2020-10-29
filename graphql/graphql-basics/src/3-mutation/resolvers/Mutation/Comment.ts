import { MutationResolvers } from '../../../types/resolversTypes';
import { Comment } from '../../interfaces/Comment';
import { v4 as uuid } from 'uuid';
import { createSubscriptionMessage } from '../../../common/helpers/createPostMessage';

const mutationResolvers: MutationResolvers<Comment> = {
  create(
    parent,
    { data }: { data: Omit<Comment, 'id'> },
    { db, pubsub },
    info,
  ) {
    const userExists = db.users.find((_user) => _user.id === data.author);
    if (!userExists) throw new Error('Author is not exists');
    const postExists = db.posts.find((_post) => _post.id === data.post);
    if (!postExists) throw new Error('Post is not exists');
    if (!postExists.published) throw new Error('Post is not published');

    const comment: Comment = { id: uuid(), ...data };
    db.comments.push(comment);
    pubsub.publish(
      `comment/${data.post}`,
      createSubscriptionMessage('comment', 'CREATED', comment),
    );
    return comment;
  },

  update(parent, { data, id }, { db, pubsub }, info) {
    const commentIndex = db.comments.findIndex(
      (_comment) => _comment.id === id,
    );
    if (commentIndex === -1) throw new Error('Comment not exists');
    const postExists = db.posts.find(
      (_post) => _post.id === db.comments[commentIndex].post,
    );
    if (!postExists) throw new Error('Post is not exists');
    if (!postExists.published) throw new Error('Post is not published');
    const originalComment = { ...db.comments[commentIndex] };
    const comment = (db.comments[commentIndex] = {
      ...originalComment,
      ...data,
    });

    pubsub.publish(
      `comment/${originalComment.post}`,
      createSubscriptionMessage('comment', 'UPDATED', comment),
    );

    return comment;
  },

  delete(parent, { id }, { db, pubsub }, info) {
    const commentIndex = db.comments.findIndex(
      (_comment) => _comment.id === id,
    );
    if (commentIndex === -1) throw new Error('Comment not exists');
    const deleteComment = db.comments.splice(commentIndex, 1)[0];

    pubsub.publish(
      `comment/${deleteComment.post}`,
      createSubscriptionMessage('comment', 'DELETED', deleteComment),
    );
    return deleteComment;
  },
};

export default mutationResolvers;
