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
  renderTasks() {
    return (
      <div>
        <h3>Things to do:</h3>
        <TaskWrapper>
          {this.props.tasks.map((task) => (
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
        {this.props.tasks && this.props.tasks.length ? this.renderTasks() : this.renderEmptyState()}
      </Wrapper>
    );
  }
}

export default List;
