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
      axios.get(`${API_URL}/tasks`).then(({ data: tasks }) => {
        this.props.onSetTasks && this.props.onSetTasks(tasks);
      });
    }
  }

  toggleTaskCreator = (creatingTask) => () => {
    this.setState({ creatingTask });
  }

  createTask = (params) => {
    this.props.onCreateTask && this.props.onCreateTask(params);
  }

  render() {
    return (
      <Wrapper>
        <SideNav openTaskCreator={this.toggleTaskCreator} />
        <List tasks={this.props.tasks} />
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
