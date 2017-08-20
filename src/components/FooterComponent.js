import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { visibilityFilters } from '../actions';

class FooterComponent extends Component{
	render(){
		return (
			<p>
				Show:
				{' '}
				{ this.renderFilter(visibilityFilters.SHOW_ALL, 'All') }
				{', '}
				{ this.renderFilter(visibilityFilters.SHOW_ACTIVE, 'Active') }
				{', '}
				{ this.renderFilter(visibilityFilters.SHOW_COMPLETED, 'Completed') }
			</p>
		);
	}

	renderFilter(filter, showName){
		const { dispatchFilterTodoAction, visibleFilter } = this.props;
		if(filter === visibleFilter){
			return showName;
		}
		
		return (
			<a href='#'
			   onClick={ e => {
			   		e.preventDefault();
			   		dispatchFilterTodoAction(filter);
			   }}
			>
				{showName}
			</a>
		);
	}
};

FooterComponent.propTypes = {
	dispatchFilterTodoAction: PropTypes.func.isRequired,
	visibleFilter: PropTypes.string.isRequired
};

export default FooterComponent;