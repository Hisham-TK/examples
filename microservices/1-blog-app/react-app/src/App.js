import React from 'react';
import PostCreate from './Posts/PostCreate';
import PostList from './Posts/PostList';

export default function App() {
    return (
        <div className="container">
            <h1>Create post</h1>
            <PostCreate />
            <hr />
            <h1>List posts</h1>
            <PostList />
        </div>
    );
}
