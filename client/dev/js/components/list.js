import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';
import moment from 'moment';

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
      filteredTasks = tasks.filter(task => !!task.complete);
    } else if (filter === 'due-soon') {
      const today = moment(new Date()).format('YYYY-MM-DD');
      let tomorrow = moment(new Date()).add(1, 'days').format('YYYY-MM-DD');

      const tasksDueToday = tasks.filter(task => task.deadline === today);
      const tasksDueTomorrow = tasks.filter(task => task.deadline === tomorrow);

      filteredTasks = [...tasksDueTomorrow, ...tasksDueToday];
    } else if (filter === 'overdue') {
      const today = moment(new Date()).format('YYYY-MM-DD');
      filteredTasks = tasks.filter(task => moment(task.deadline).isBefore(today));
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
