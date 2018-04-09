import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';

import TaskDetailsModal from './task-details-modal';
import Checkbox from '../elements/checkbox';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border: 3px solid ${props => props.color};
  border-radius: 4px;
  margin: 10px 0;
  padding: 15px;
`;

const TaskWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  text-decoration: ${props => props.complete ? 'line-through' : 'none'};
`;

const RemoveButton = styled.p`
  cursor: pointer;
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
      color: this.determineTaskBorderColor(props),
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ color: this.determineTaskBorderColor(nextProps)});
  }

  determineTaskBorderColor(props) {
    const { complete, overdue, dueSoon } = props;
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

  removeTask = () => {
    this.props.removeTask && this.props.removeTask(this.props.id);
  }

  renderListMode() {
    return (
      <Wrapper color={this.state.color}>
        <TaskWrapper complete={this.props.complete}>
          <Checkbox onchange={this.updateTask} checked={this.props.complete} />
          <TaskName onClick={this.toggleSelection(true)}>{this.props.name}</TaskName>
        </TaskWrapper>
        <RemoveButton onClick={this.removeTask}>[ Remove ]</RemoveButton>
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
