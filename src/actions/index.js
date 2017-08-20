let nextId = 1;
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const visibilityFilters = {
	SHOW_ALL: 'SHOW_ALL',
	SHOW_ACTIVE: 'SHOW_ACTIVE',
	SHOW_COMPLETED: 'SHOW_COMPLETED'
};

/* Action Creator */
export const addTodoAction = (text) => {
	return {
		type: ADD_TODO,
		id: nextId ++,
		text
	}
};

export const toggleTodoAction = (id) => {
	return {
		type: TOGGLE_TODO,
		id
	}
};

export const setFilterAction = (filter) => {
	return {
		type: SET_VISIBILITY_FILTER,
		filter
	}
};