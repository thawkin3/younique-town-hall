import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';
import './VoteArrows.css';


class VoteArrows extends Component {
    constructor(props) {
        super(props);
        this.handleOnClickDownVote = this.handleOnClickDownVote.bind(this);
        this.handleOnClickUpVote = this.handleOnClickUpVote.bind(this);
    }

    handleOnClickDownVote() {
        this.props.downvote(this.props.id);
    }

    handleOnClickUpVote() {
        this.props.upvote(this.props.id);
    }

    render() {
        const { upVotes, downVotes } = this.props;

        return (
            <div>
                <button type="button" className="voteArrow voteArrowLeft" onClick={this.handleOnClickUpVote}>
                    Yea {upVotes}
                </button>
                <button type="button" className="voteArrow" onClick={this.handleOnClickDownVote}>
                    Nay {downVotes}
                </button>
            </div>
        );
    }
}

export default connect(null, actions)(VoteArrows);
