import React, { Component } from 'react';
// import Axios from 'axios';
import PropTypes from 'prop-types';

export default class CommentList extends Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     comments: [],
        // };
        // this.componentDidMount = this.componentDidMount.bind(this);

        this.state = {
            comments: [],
        };
    }

    async componentDidMount() {
        setTimeout(() => {
            this.setState({
                comments: this.props.comments.map((comment) => (
                    <div className="card" key={comment.id}>
                        <div className="comment-widgets">
                            <div className="d-flex flex-row comment-row m-t-0">
                                <div className="comment-text w-100">
                                    <span className="m-b-15 d-block">
                                        {
                                            {
                                                postponed: 'Comment wait for moderation',
                                                approved: comment.content,
                                                rejected: 'This comment is rejected',
                                            }[comment.status]
                                        }
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                )),
            });
        }, 500);

        // await this.fetchComments();
    }

    // async fetchComments() {
    //     const res = await Axios.get(`http://localhost:3332/posts/${this.props.postId}/comments`);
    //     this.setState({
    //         comments: res.data.map((comment) => (
    //             <div className="card" key={comment.id}>
    //                 <div className="comment-widgets">
    //                     <div className="d-flex flex-row comment-row m-t-0">
    //                         <div className="comment-text w-100">
    //                             <span className="m-b-15 d-block">{comment.content}</span>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         )),
    //     });
    // }

    render() {
        return (
            <div>
                <div className="card-body text-center">
                    <h4 className="card-title">Latest Comments</h4>
                </div>
                {this.state.comments}
            </div>
        );
    }
}
CommentList.propTypes = {
    // postId: PropTypes.string.isRequired,
    comments: PropTypes.object.isRequired,
};
