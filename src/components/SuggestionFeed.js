import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';
import Suggestion from './Suggestion';
import './SuggestionFeed.css';

export class SuggestionFeed extends Component {
    componentDidMount() {
        this.props.getSuggestions();
    }

    render() {
        const { suggestions } = this.props;
        return (
            <div id="suggestionFeed">
                <h2>Current Suggestions</h2>
                { suggestions && suggestions.length > 0 ? (
                    suggestions.sort((a, b) => (b.up_vote - b.down_vote) - (a.up_vote - a.down_vote)).map(suggestion => <Suggestion suggestion={suggestion} key={suggestion.text} />)
                ) : (
                    <p>No suggestions yet. Be the first to voice your opinion!</p>
                )}
            </div>
        );
    }
}

function mapStateToProps({suggestions}) {
    return {
        suggestions,
    };
}

export default connect(mapStateToProps, actions)(SuggestionFeed);
