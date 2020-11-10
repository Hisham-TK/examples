import { User } from './modules/interfaces/User';
import { Post } from './modules/interfaces/Post';
import { Comment } from './modules/interfaces/Comment';

/*
Data
*/
const users: User[] = [
  {
    id: '1',
    name: 'Hisham',
    email: 'hisham@gmail.com',
    age: 26,
    posts: ['1', '2'],
  },
  {
    id: '2',
    name: 'Ahmed',
    email: 'ahmed@gmail.com',
    age: 27,
    posts: ['3'],
  },
  {
    id: '3',
    name: 'Ali',
    email: 'ali@gmail.com',
    age: 25,
    posts: [],
    comments: ['1', '2', '3', '4'],
  },
];

const posts: Post[] = [
  {
    id: '1',
    title: 'How to GraphQL',
    body: 'learning graph-ql and it is pros',
    published: false,
    author: '1',
    comments: ['2', '3'],
  },
  {
    id: '2',
    title: 'GraphQL Basic',
    body: 'let learn query and types',
    published: true,
    author: '1',
    comments: ['1', '4'],
  },
  {
    id: '3',
    title: 'GraphQL vs REST API',
    body: 'pros of graph-ql',
    published: true,
    author: '2',
    comments: [],
  },
];

const comments: Comment[] = [
  { id: '1', text: 'Thanks a lot Hisham', post: '2', author: '3' },
  { id: '2', text: 'This was great article', post: '1', author: '3' },
  { id: '3', text: 'That is great', post: '1', author: '3' },
  { id: '4', text: 'Good point', post: '2', author: '3' },
  { id: '5', text: 'Not working for me', post: '3', author: '2' },
  { id: '6', text: 'You can fix it by this', post: '3', author: '1' },
];

const db = { users, posts, comments };
export type DbType = typeof db;
export default db;
