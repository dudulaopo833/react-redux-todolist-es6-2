import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddTodoComponent extends Component{
	render(){
		return (
			<div>
				<input ref='input' />
				<button
					onClick={ e => this.handleClick(e)}
				>
					Add
				</button>
			</div>
		);
	}

	handleClick(e){
		const { dispatchAddTodoAction } = this.props;
		e.preventDefault();
		const node = this.refs.input;
		const text = node.value.trim();
		if (!text) { return; }
		dispatchAddTodoAction(text);
		node.value = '';
	}
};

AddTodoComponent.propTypes = {
	dispatchAddTodoAction: PropTypes.func.isRequired
}

export default AddTodoComponent;