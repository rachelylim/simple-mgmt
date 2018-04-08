import { connect } from 'react-redux';
import { createTask, setTasks, updateTask, setFilter } from './actions';

import App from '../components/App';

const mapStateToProps = state => ({
  filter: state.filter,
  tasks: state.tasks,
});

const mapDispatchToProps = dispatch => ({
  onCreateTask: params => dispatch(createTask(params)),
  onSetTasks: tasks => dispatch(setTasks()),
  onUpdateTaskCompletion: (id, params) => dispatch(updateTask(id, params)),
  onSetFilter: filter => dispatch(setFilter(filter)),
});

const TaskListContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default TaskListContainer;
