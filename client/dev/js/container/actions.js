import axios from 'axios';
import { API_URL } from '../constants';

export const actionTypes = {
  SET_TASKS: 'SET_TASKS',
  SET_FILTER: 'SET_FILTER',
};

export function createTask(params) {
  return (dispatch) => {
    axios.post(`${API_URL}/tasks`, params)
    .then(({ data: payload}) => {
      dispatch(setTasks());
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

export function setFilter(filter) {
  return dispatch => dispatch({ type: actionTypes.SET_FILTER, filter });
}
