// import { GraphQLTypeResolver } from "graphql";
import { GraphQLResolverMethods } from '../../types/resolversTypes';

const queryResolvers: GraphQLResolverMethods = {
  greeting(parent, { name }: { name?: string }, { db }, info) {
    return `Hello.. ${name || ''}!`;
  },

  add(parent, { numbers }: { numbers: number[] }, { db }, info) {
    return numbers.reduce((_previous, _current) => _previous + _current);
  },
  grads(parent, args, { db }, info) {
    return [99, 80, 93];
  },

  me(parent, args, { db }, info) {
    return db.users[0];
  },
  users(parent, { query }, { db }, info) {
    if (query) return db.users;
    return db.users.filter((_user: { name: string; }) => RegExp(query, 'i').exec(_user.name));
    // return db.users.filter((_obj) => _obj.name.toLowerCase().includes(query.toLowerCase()));
  },

  post(parent, args, { db }, info) {
    return db.posts[0];
  },
  posts(parent, query, { db }, info) {
    if (!query) return db.posts;
    return db.posts.filter(
      (obj: { title: string; body: string; }) =>
        new RegExp(query, 'i').exec(obj.title) ||
        new RegExp(query, 'i').exec(obj.body),
    );
  },

  comment(parent, args, { db }, info) {
    return db.comments[0];
  },
  comments(parent, { query }, { db }, info) {
    if (!query) return db.comments;
    return db.comments.filter(
      (comment: { id: any; text: any; }) => comment.id === query || comment.text === query,
    );
  },
};

export default queryResolvers;
