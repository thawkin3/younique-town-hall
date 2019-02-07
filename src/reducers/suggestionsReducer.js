import { GET_SUGGESTIONS, ADD_SUGGESTION, UPDATE_SUGGESTION_VOTES } from '../actions/types';
import INITIAL_STATE from './initialState';

export default function(state = INITIAL_STATE.suggestions, action) {
    switch (action.type) {
        case GET_SUGGESTIONS:
            return action.payload;
        case ADD_SUGGESTION:
            return [...state, action.payload];
        case UPDATE_SUGGESTION_VOTES:
            return state.map(suggestion => action.payload.id === suggestion.id ? action.payload : suggestion);
        default:
            return state;
    }
}