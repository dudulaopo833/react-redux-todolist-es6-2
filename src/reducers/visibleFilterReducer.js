import { visibilityFilters, SET_VISIBILITY_FILTER } from '../actions';

const visibleFilterReducer = (state = visibilityFilters.SHOW_ALL, action) => {
	switch(action.type) {
		case SET_VISIBILITY_FILTER:
			return action.filter;
		default:
			return state;
	}
};

export default visibleFilterReducer;