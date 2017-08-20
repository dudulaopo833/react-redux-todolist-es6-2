import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import todoAppReducers from './reducers'
import { Provider } from 'react-redux';
import AppContainer from './containers/AppContainer';

const store = createStore(todoAppReducers);

render(
	<Provider store={store}>
		<AppContainer />
	</Provider>, 
	document.getElementById('root')
);
