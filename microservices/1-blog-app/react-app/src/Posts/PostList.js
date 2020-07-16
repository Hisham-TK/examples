import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import CommentCreate from '../Comments/CommentCreate';
import CommentList from '../Comments/CommentList';

export default function PostCreate() {
    const [posts, setPosts] = useState({});

    const fetchPosts = async () => {
        // const res = await Axios.get('http://localhost:3331/posts');
        const res = await Axios.get('http://localhost:3333/posts');
        setPosts(res.data);
    };

    useEffect(() => {
        fetchPosts();
    }, []);
    const renderedPosts = Object.values(posts).map((post) => (
        <div className="card" key={post.id} style={{ width: '30%', marginBottom: '20px' }}>
            <div className="card-body">
                <h3 className="card-title">{post.title}</h3>
                <div className="card-text">
                    <CommentList comments={post.comments} />
                    <hr />
                    <CommentCreate postId={post.id} />
                </div>
            </div>
        </div>
    ));

    return <div className="d-flex flew-row flex-wrap justify-content-between">{renderedPosts}</div>;
}
