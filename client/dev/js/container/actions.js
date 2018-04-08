import axios from 'axios';
import { API_URL } from '../constants';

export const actionTypes = {
  ADD_TASK: 'ADD_TASK',
  SET_TASKS: 'SET_TASKS',
};

export function createTask(params) {
  return (dispatch) => {
    axios.post(`${API_URL}/tasks`, params)
    .then(({ data: payload}) => {
      dispatch({ type: actionTypes.ADD_TASK, payload });
    });
  };
}

export function setTasks() {
  return (dispatch) => {
    axios.get(`${API_URL}/tasks`)
    .then(({ data: tasks }) => {
      return dispatch({ type: actionTypes.SET_TASKS, tasks });
    });
  }
}

export function updateTask(id, params) {
  return (dispatch) => {
    axios.patch(`${API_URL}/tasks/${id}`, params)
    .then(({ data: payload }) => {
      dispatch(setTasks());
    });
  };
}