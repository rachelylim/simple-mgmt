import axios from 'axios';
import { API_URL } from '../constants';

export const actionTypes = {
  ADD_TASK: 'ADD_TASK',
  SET_TASKS: 'SET_TASKS',
};

export function createTask(params) {
  return (dispatch) => {
    axios.post(`${API_URL}/tasks`, params)
    .then(({ data: newTask}) => {
      dispatch({ type: actionTypes.ADD_TASK, newTask })
    });
  }
}

export function setTasks(tasks) {
  return { type: actionTypes.SET_TASKS, tasks };
}
