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
  constructor(props) {
    super(props);
    this.state = {
      creatingTask: false,
    };
  }

  componentWillMount() {
    if (!this.props.tasks.length) {
      this.props.onSetTasks && this.props.onSetTasks();
    }
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

  render() {
    return (
      <Wrapper>
        <SideNav
          openTaskCreator={this.toggleTaskCreator}
          setFilter={this.setFilter}
          filter={this.props.filter}
        />
        <List
          tasks={this.props.tasks}
          updateTask={this.updateTask}
          filter={this.props.filter}
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
