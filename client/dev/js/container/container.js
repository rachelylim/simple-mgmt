import { connect } from 'react-redux';
import { createTask, setTasks } from './actions';

import App from '../components/App';

const mapStateToProps = state => ({
  tasks: state.tasks,
});

const mapDispatchToProps = dispatch => ({
  onCreateTask: params => dispatch(createTask(params)),
  onSetTasks: tasks => dispatch(setTasks(tasks)),
});

const TaskListContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default TaskListContainer;
