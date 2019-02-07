import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';
import SuggestionInput from './SuggestionInput';
import SuggestionFeed from './SuggestionFeed';
import './App.css';
import votebox from '../assets/votebox.png';

export class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={votebox} className="App-logo" alt="votebox" />
                    <h1 className="App-title">Younique Town Hall</h1>
                </header>
                <div className="App-body">
                    <SuggestionInput/>
                    <SuggestionFeed/>
                </div>
                <div className="App-footer">
                    <p>Brought to you by: Team Digital Media and Social Marketing</p>
                </div>
            </div>
        );
    }
}

export default connect(null, actions)(App);
