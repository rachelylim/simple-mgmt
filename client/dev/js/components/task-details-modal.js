import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';

import Modal from '../modules/modal';
import Button from '../elements/button';

const DateCompleteWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

class TaskDetailsModal extends Component {
  static get propTypes() {
    return {
      closeModal: PropTypes.func,
      complete: PropTypes.bool,
      deadline: PropTypes.string,
      description: PropTypes.string,
      name: PropTypes.string,
      updateTask: PropTypes.func,
    };
  }

  closeModal = () => {
    this.props.closeModal && this.props.closeModal();
  }

  updateTask = () => {
    this.props.updateTask && this.props.updateTask();
    this.closeModal();
  }

  render() {
    const { complete, name, description, deadline } = this.props;
    return (
      <Modal darkOverlay closeModal={this.closeModal}>
        <h3>{name}</h3>
        <p>{description}</p>
        <DateCompleteWrapper>
          <p>{deadline || 'No Deadline'}</p>
          <Button
            copy={`Mark ${complete ? 'Incomplete' : 'Complete'}`}
            onclick={this.updateTask}
          />
        </DateCompleteWrapper>
      </Modal>
    );
  }
}

export default TaskDetailsModal;
