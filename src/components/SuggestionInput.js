import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';
import './SuggestionInput.css';

export class SuggestionInput extends Component {
    constructor(props) {
        super(props);

        this.changeHandler = this.changeHandler.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    changeHandler(e) {
        this.props.updateSuggestionBoxValue(e.target.value);
    }

    submitForm(e) {
        e.preventDefault();
        console.log(this.props.suggestionTextInputValue);
        this.props.submitForm(this.props.suggestionTextInputValue);
        this.props.updateSuggestionBoxValue('');
    }

    render() {
        return (
            <form id="suggestionForm" onSubmit={this.submitForm}>
                <input type="text" id="suggestionTextInput" onChange={this.changeHandler} value={this.props.suggestionTextInputValue} placeholder="Enter your suggestion here" />
                <button type="submit" id="suggestionSubmitButton">Submit</button>
            </form>
        );
    }
}

function mapStateToProps({suggestionTextInputValue}) {
    return {
        suggestionTextInputValue,
    };
}

export default connect(mapStateToProps, actions)(SuggestionInput);
