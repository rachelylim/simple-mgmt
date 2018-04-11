import { connect } from 'react-redux';
import { createTask, setTasks, updateTask, setFilter, removeTask } from './actions';

import App from '../components/app';

const mapStateToProps = state => ({
  filter: state.filter,
  tasks: state.tasks,
});

const mapDispatchToProps = dispatch => ({
  onCreateTask: params => dispatch(createTask(params)),
  onSetTasks: tasks => dispatch(setTasks()),
  onUpdateTaskCompletion: (id, params) => dispatch(updateTask(id, params)),
  onSetFilter: filter => dispatch(setFilter(filter)),
  onRemoveTask: id => dispatch(removeTask(id)),
});

const TaskListContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default TaskListContainer;
