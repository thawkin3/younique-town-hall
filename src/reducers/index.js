import { combineReducers } from 'redux';

import suggestionTextInputValueReducer from './suggestionTextInputValueReducer';
import suggestionsReducer from './suggestionsReducer';

export default combineReducers({
    suggestionTextInputValue: suggestionTextInputValueReducer,
    suggestions: suggestionsReducer,
});
