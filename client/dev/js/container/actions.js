import axios from 'axios';
import moment from 'moment';

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

function setTaskFilter(task) {
  const today = moment(new Date()).format('YYYY-MM-DD');
  let tomorrow = moment(new Date()).add(1, 'days').format('YYYY-MM-DD');

  if (moment(task.deadline).isBefore(today)) {
    return { ...task, overdue: true };
  } else if (task.deadline === today || task.deadline === tomorrow) {
    return { ...task, dueSoon: true };
  } else {
    return task;
  }
}

export function setTasks() {
  return (dispatch) => {
    axios.get(`${API_URL}/tasks`)
    .then(({ data }) => {
      const tasks = data.map(task => setTaskFilter(task));
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
