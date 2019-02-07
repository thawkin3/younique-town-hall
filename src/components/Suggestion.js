import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';
import VoteArrows from './VoteArrows';
import './Suggestion.css';

export class Suggestion extends Component {
    render() {
        const { suggestion } = this.props;
        return (
            <div className="suggestion">
                <VoteArrows id={suggestion.id} upVotes={suggestion.up_vote} downVotes={suggestion.down_vote} />
                <p>{suggestion.text}</p>
            </div>
        );
    }
}

export default connect(null, actions)(Suggestion);
