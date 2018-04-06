import {combineReducers} from 'redux';
import { actionTypes } from './actions';

const tasks = (state = [], action) => {
  console.log('action', action)
  switch (action.type) {
    case actionTypes.ADD_TASK:
      return [...state, action.newTask];
    case actionTypes.SET_TASKS:
      return [...state, ...action.tasks];
    default:
      return state;
  }
}

const allReducers = combineReducers({ tasks });

export default allReducers
