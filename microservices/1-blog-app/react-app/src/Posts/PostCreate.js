import React, { useState } from 'react';
import Axios from 'axios';

export default function PostCreate() {
    const [title, setTitle] = useState('');

    const onSubmit = async (event) => {
        event.preventDefault();
        await Axios.post('http://localhost:3331/posts', { title });
        setTitle('');
    };

    return (
        <form onSubmit={onSubmit}>
            <div className="form-group" onSubmit={onSubmit}>
                <label htmlFor="post_title" className="mr-2">Post title</label>
                <input
                    id="post_title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    type="text"
                    className="from-control"
                ></input>
            </div>
            <button className="btn btn-primary">Submit</button>
        </form>
    );
}
