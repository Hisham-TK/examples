export interface User {
  id: string;
  name: string;
  email: string;
  age: number;
  posts?: string[];
  comments?: string[];
  // posts?: (Post | string)[];
  // comments?: (Comment | string)[];
}

export type Post = {
  id: string;
  title: string;
  body: string;
  published: boolean;
  author: string;
  comments?: string[];
  // author: User | string;
  // comments?: (Comment | string)[];
};
export type Comment = {
  id: string;
  text: string;
  author: string;
  post:  string;
  // author: User | string;
  // post: Post | string;
};

