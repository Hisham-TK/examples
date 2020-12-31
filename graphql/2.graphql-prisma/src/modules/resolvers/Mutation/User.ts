import { MutationResolvers } from '../../../types/resolversTypes';
import { User } from '../../interfaces/User';
import { v4 as uuid } from 'uuid';

const mutationResolvers: MutationResolvers<User> = {
  create(parent, { data }, { db }, info) {
    if (db.users.find((_user: { email: string; }) => _user.email === data.email))
      throw new Error('Email is token !');

    const user = { id: uuid(), ...data };
    db.users.push(user);
    return user;
  },

  update(parent, { data, id }, { db }, info) {
    const userIndex = db.users.findIndex((_user: { id: string; }) => _user.id === id);
    if (userIndex === -1) throw new Error('User not exists');
    if (
      data.email &&
      db.users.findIndex(
        (user: { email: string; id: string; }) => user.email === data.email && user.id !== id,
      ) > -1
    )
      throw new Error('Email is token');
    db.users[userIndex] = { ...db.users[userIndex], ...data };
    return db.users[userIndex];
  },

  delete(parent, { id }, { db }, info) {
    const userIndex = db.users.findIndex((_user: { id: string; }) => _user.id === id);
    if (userIndex === -1) throw new Error('User not exists');
    const [deleteUser] = db.users.splice(userIndex, 1);
    db.posts = db.posts.filter((_post: { author: string; id: any; }) => {
      const match = _post.author === id;
      if (match)
        db.comments = db.comments.filter(
          (_comment: { post: any; }) => _comment.post !== _post.id,
        );
      return !match;
    });
    db.comments = db.comments.filter((_comment: { author: string; }) => _comment.author !== id);
    return deleteUser;
  },
};

export default mutationResolvers;
