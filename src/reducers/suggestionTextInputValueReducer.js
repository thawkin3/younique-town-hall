import { UPDATE_SUGGESTION_BOX_VALUE } from '../actions/types';
import INITIAL_STATE from './initialState';

export default function(state = INITIAL_STATE.suggestionTextInputValue, action) {
    switch (action.type) {
        case UPDATE_SUGGESTION_BOX_VALUE:
            return action.payload;
        default:
            return state;
    }
}