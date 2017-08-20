import { connect } from 'react-redux';
import { addTodoAction, toggleTodoAction, setFilterAction, visibilityFilters } from '../actions';
import AppComponent from '../components/AppComponent';

const getVisibleTodos = (todos, filter) => {
	switch(filter) {
		case visibilityFilters.SHOW_ALL:
			return todos;
		case visibilityFilters.SHOW_COMPLETED:
			return todos.filter(t => t.completed);
		case visibilityFilters.SHOW_ACTIVE:
			return todos.filter(t => !t.completed);
		default:
			return todos;
	}
};

const mapStateToProps = (state) => {
	return {
		visibleTodos: getVisibleTodos(state.todos, state.visibleFilter),
		visibleFilter: state.visibleFilter
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		dispatchAddTodo: (text) => {
			dispatch(addTodoAction(text));
		},
		dispatchToggleTodo: (index) => {
			dispatch(toggleTodoAction(index));
		},
		dipatchFilterTodo: (filter) => {
			dispatch(setFilterAction(filter));
		}
	}
};

const AppContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(AppComponent);

export default AppContainer;

