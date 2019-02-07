import axios from 'axios';
import {
    ADD_SUGGESTION,
    GET_SUGGESTIONS,
    UPDATE_SUGGESTION_BOX_VALUE,
    UPDATE_SUGGESTION_VOTES,
} from './types';

export const updateSuggestionBoxValue = (textValue) => dispatch => {
    dispatch({ type: UPDATE_SUGGESTION_BOX_VALUE, payload: textValue });
};

export const submitForm = (textValue) => dispatch => {
    const url = 'https://879hwxpc3m.execute-api.us-west-2.amazonaws.com/latest/upsert';
    return axios.post(url, { text: textValue }).then(response => dispatch({ type: ADD_SUGGESTION, payload: response.data }));
};

export const getSuggestions = () => dispatch => {
    const url = 'https://879hwxpc3m.execute-api.us-west-2.amazonaws.com/latest/getAll';
    return axios.get(url).then(response => dispatch({ type: GET_SUGGESTIONS, payload: response.data.Items }));
}

export const upvote = (id) => dispatch => {
    const url = 'https://879hwxpc3m.execute-api.us-west-2.amazonaws.com/latest/vote';
    return axios.post(url, { id: id, type: 'upvote' }).then(response => dispatch({ type: UPDATE_SUGGESTION_VOTES, payload: response.data }));
};

export const downvote = (id) => dispatch => {
    const url = 'https://879hwxpc3m.execute-api.us-west-2.amazonaws.com/latest/vote';
    return axios.post(url, { id: id, type: 'downvote' }).then(response => dispatch({ type: UPDATE_SUGGESTION_VOTES, payload: response.data }));
};
