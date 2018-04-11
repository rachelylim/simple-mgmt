import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';

import Task from './task';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  overflow: scroll;
`;

const TaskWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

class List extends Component {
  constructor(props) {
    super(props);
    const { filter, tasks } = props;
    this.state = { filteredTasks: this.filterTasks(props) };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ filteredTasks: this.filterTasks(nextProps) });
  }

  filterTasks({ filter, tasks }) {
    if (filter === 'completed') {
      return tasks.filter(task => task.complete);
    } else if (filter === 'due-soon') {
      return tasks.filter(task => task.dueSoon);
    } else if (filter === 'overdue') {
      return tasks.filter(task => task.overdue && !task.complete);
    } else {
      return tasks;
    }
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
              removeTask={this.props.removeTask}
            />
          ))}
        </TaskWrapper>
      </div>
    )
  }

  renderEmptyState() {
    return <h3>There are no tasks. Get to work!</h3>;
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
