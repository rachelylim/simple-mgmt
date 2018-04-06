import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import allReducers from './container/reducers';
import TaskListContainer from './container/container';

const store = createStore(
  allReducers,
  applyMiddleware(thunk)
);

ReactDOM.render(
    <Provider store={store}>
        <TaskListContainer />
    </Provider>,
    document.getElementById('root')
);
