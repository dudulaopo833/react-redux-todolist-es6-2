import React, { Component } from 'react';
import PropTypes from 'prop-types';
import OneTodoComponent from './OneTodoComponent';

class TodoListComponent extends Component{
	render(){
		const { dispatchToggleTodoAction, visibleTodos } = this.props;
		return (
			<ul>
			{visibleTodos.map(todo =>
					<OneTodoComponent 
						key={todo.id}
						dispatchToggleTodoAction={dispatchToggleTodoAction}
						{...todo}
					/>
			)}
			</ul>
		);
	}
};

TodoListComponent.propTypes = {
	dispatchToggleTodoAction: PropTypes.func.isRequired,
	visibleTodos: PropTypes.arrayOf(PropTypes.shape({
		text: PropTypes.string.isRequired,
		completed: PropTypes.bool.isRequired,
		id: PropTypes.number.isRequired
	}).isRequired).isRequired,
};

export default TodoListComponent;