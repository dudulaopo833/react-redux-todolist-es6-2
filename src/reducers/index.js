import todosReducer from './todosReducer';
import visibleFilterReducer from './visibleFilterReducer';
import { combineReducers } from 'redux';

export default combineReducers({
	todos: todosReducer,
	visibleFilter: visibleFilterReducer
});