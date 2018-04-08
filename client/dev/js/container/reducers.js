import {combineReducers} from 'redux';
import { actionTypes } from './actions';

const tasks = (state = [], action) => {
  switch (action.type) {
    case actionTypes.SET_TASKS:
      return [...action.tasks];
    default:
      return state;
  }
}

const filter = (state = 'all', action) => {
  switch (action.type) {
    case actionTypes.SET_FILTER:
      return action.filter;
    default:
      return state;
  }
}

const allReducers = combineReducers({ filter, tasks });

export default allReducers
