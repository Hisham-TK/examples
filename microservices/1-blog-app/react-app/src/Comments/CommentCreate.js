import React, { Component } from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';

export default class CommentCreate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            content: '',
        };

        this.onSubmit = this.onSubmit.bind(this);
    }

    async onSubmit(event) {
        event.preventDefault();
        const comment = await Axios.post(`http://localhost:3332/posts/${this.props.postId}/comments`, {
            content: this.state.content,
        });

        this.setState({ content: '' });
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label /* htmlFor="createComment" */>Add new comment: </label>
                    <input
                        // id="createComment"
                        className="form-control"
                        value={this.state.content}
                        onChange={(event) => {
                            this.setState({ content: event.target.value });
                        }}
                    ></input>
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

CommentCreate.propTypes = {
    postId: PropTypes.string.isRequired,
};
