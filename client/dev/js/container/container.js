import { connect } from 'react-redux';
import { createTask, setTasks, updateTask } from './actions';

import App from '../components/App';

const mapStateToProps = state => ({
  tasks: state.tasks,
});

const mapDispatchToProps = dispatch => ({
  onCreateTask: params => dispatch(createTask(params)),
  onSetTasks: tasks => dispatch(setTasks()),
  onUpdateTaskCompletion: (id, params) => dispatch(updateTask(id, params)),
});

const TaskListContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default TaskListContainer;
