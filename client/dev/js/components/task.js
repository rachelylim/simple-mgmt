import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';

import TaskDetailsModal from './task-details-modal';
import Checkbox from '../elements/checkbox';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: 3px solid ${props => props.color};
  border-radius: 4px;
  margin: 10px 0;
  padding: 15px;

  text-decoration: ${props => props.complete ? 'line-through' : 'none'};
`;

const TaskName = styled.p`
  margin: 0;
  padding: 10px;
  margin-left: 10px;
  width: 100%;
  cursor: pointer;
`;

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
      color: this.determineTaskBorderColor(),
    };
  }

  determineTaskBorderColor() {
    const { complete, overdue, dueSoon } = this.props;
    if (complete) return 'green';
    if (overdue) return 'red';
    if (dueSoon) return 'orange';
    return 'gray';
  }

  renderSelectedMode() {
    return (
      <TaskDetailsModal
        {...this.props}
        closeModal={this.toggleSelection(false)}
        updateTask={this.updateTask}
      />
    );
  }

  toggleSelection = (selected) => () => {
    this.setState({ selected });
  }

  updateTask = () => {
    const { complete, id } = this.props;
    this.props.updateTask && this.props.updateTask(id, { complete: !complete });
  }

  renderListMode() {
    return (
      <Wrapper complete={this.props.complete} color={this.state.color}>
        <Checkbox onchange={this.updateTask} checked={this.props.complete} />
        <TaskName onClick={this.toggleSelection(true)}>{this.props.name}</TaskName>
      </Wrapper>
    );
  }

  render() {
    return (
      <div>
        {this.renderListMode()}
        {this.state.selected && this.renderSelectedMode()}
      </div>
    );
  }
}

export default Task;
