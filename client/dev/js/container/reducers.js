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

const allReducers = combineReducers({ tasks });

export default allReducers
