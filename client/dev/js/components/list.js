import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';

import Task from './task';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const TaskWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

class List extends Component {
  constructor(props) {
    super(props);
    const { filter, tasks } = props;
    this.state = { filteredTasks: props.tasks };
  }

  componentWillReceiveProps(nextProps) {
    const { filter, tasks } = nextProps;
    this.filterTasks(filter, tasks);
  }

  filterTasks(filter, tasks) {
    let filteredTasks;

    if (filter === 'completed') {
      filteredTasks = tasks.filter(task => task.complete);
    } else if (filter === 'due-soon') {
      filteredTasks = tasks.filter(task => task.dueSoon);
    } else if (filter === 'overdue') {
      filteredTasks = tasks.filter(task => task.overdue);
    } else {
      filteredTasks = tasks;
    }

    this.setState({ filteredTasks });
  }

  renderTasks() {
    return (
      <div>
        <h3>Things to do:</h3>
        <TaskWrapper>
          {this.state.filteredTasks.map((task) => (
            <Task
              {...task}
              key={task.id}
              updateTask={this.props.updateTask}
            />
          ))}
        </TaskWrapper>
      </div>
    )
  }

  renderEmptyState() {
    return (
      <h3>There are no tasks. Get to work!</h3>
    );
  }

  render() {
    return (
      <Wrapper>
        {this.state.filteredTasks && this.state.filteredTasks.length ? this.renderTasks() : this.renderEmptyState()}
      </Wrapper>
    );
  }
}

export default List;
