import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddTodoComponent from '../components/AddTodoComponent';
import TodoListComponent from '../components/TodoListComponent';
import FooterComponent from '../components/FooterComponent';

class AppComponent extends Component{
	render(){
		const { visibleTodos, visibleFilter, dispatchAddTodo, dispatchToggleTodo, dipatchFilterTodo} = this.props;

		return (
			<div>
				<AddTodoComponent dispatchAddTodoAction={dispatchAddTodo} />
				<TodoListComponent dispatchToggleTodoAction={dispatchToggleTodo} visibleTodos={visibleTodos} />
				<FooterComponent dispatchFilterTodoAction={dipatchFilterTodo}  visibleFilter={visibleFilter}/>
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
	visibleFilter: PropTypes.oneOf([
	    'SHOW_ALL',
	    'SHOW_COMPLETED',
	    'SHOW_ACTIVE'
	]).isRequired,
	dispatchAddTodo: PropTypes.func.isRequired,
	dispatchToggleTodo: PropTypes.func.isRequired,
	dipatchFilterTodo: PropTypes.func.isRequired
};

export default AppComponent;