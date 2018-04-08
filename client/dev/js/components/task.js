import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';

import TaskDetailsModal from './task-details-modal';
import Checkbox from '../elements/checkbox';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid black;
  border-radius: 4px;
  margin: 10px;
  padding: 15px;

  text-decoration: ${props => props.complete ? 'line-through' : 'none'};
`;

const TaskName = styled.p`
  margin-left: 10px;
`;

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = { selected: false };
  }

  renderSelectedMode() {
    return <TaskDetailsModal {...this.props} closeModal={this.toggleSelection(false)} />;
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
      <Wrapper complete={this.props.complete}>
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
