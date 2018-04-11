import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import axios from 'axios';

import { API_URL } from '../constants';

import List from './list';
import SideNav from './side-nav';
import CreateTaskModal from './create-task-modal';

const Wrapper = styled.div`
  display: flex;
  height: 100%;
`;

class App extends Component {
  static get propTypes() {
    return {
      tasks: PropTypes.array,
      onCreateTask: PropTypes.func,
      onRemoveTask: PropTypes.func,
      onSetTasks: PropTypes.func,
      onSetFilter: PropTypes.func,
      openTaskCreator: PropTypes.func,
      onUpdateTaskCompletion: PropTypes.func,
    };
  }

  constructor(props) {
    super(props);
    this.state = { creatingTask: false };
  }

  componentWillMount() {
    const { tasks, onSetTasks } = this.props;
    if (!tasks.length) onSetTasks && onSetTasks();
  }

  toggleTaskCreator = (creatingTask) => () => {
    this.setState({ creatingTask });
  }

  createTask = (params) => {
    this.props.onCreateTask && this.props.onCreateTask(params);
  }

  updateTask = (id, params) => {
    this.props.onUpdateTaskCompletion && this.props.onUpdateTaskCompletion(id, params);
  }

  setFilter = (filter) => {
    this.props.onSetFilter && this.props.onSetFilter(filter);
  }

  removeTask = (id) => {
    this.props.onRemoveTask && this.props.onRemoveTask(id);
  }

  render() {
    return (
      <Wrapper>
        <SideNav
          openTaskCreator={this.toggleTaskCreator}
          setFilter={this.setFilter}
          filter={this.props.filter}
        />
        <List
          {...this.props}
          removeTask={this.removeTask}
          updateTask={this.updateTask}
        />
        {this.state.creatingTask &&
          <CreateTaskModal
            closeModal={this.toggleTaskCreator(false)}
            createTask={this.createTask}
          />
        }
      </Wrapper>
    );
  }
}

export default App;
