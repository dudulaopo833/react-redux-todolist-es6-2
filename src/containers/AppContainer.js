import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTodoAction, toggleTodoAction, setFilterAction, visibilityFilters } from '../actions';
import AddTodoComponent from '../components/AddTodoComponent';

class AppComponent extends Component{
	render(){
		const { visibleTodos, visibleFilter, dispatchAddTodo } = this.props;

		return (
			<div>
				<AddTodoComponent dispatchAddTodoAction={dispatchAddTodo} />
			</div>
		);
	}
};

AppComponent.propTypes = {
	visibleTodos: PropTypes.arrayOf(PropTypes.shape({
		text: PropTypes.string.isRequired,
		completed: PropTypes.bool.isRequired,
		id: PropTypes.number.isRequired
	}).isRequired).isRequired,
	visibleFilter: PropTypes.string.isRequired,
	dispatchAddTodo: PropTypes.func.isRequired
};

// Below is the container

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
		}
	}
};

const AppContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(AppComponent);

export default AppContainer;

