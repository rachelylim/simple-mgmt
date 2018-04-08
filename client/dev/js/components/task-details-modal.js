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
  closeModal = () => {
    this.props.closeModal && this.props.closeModal();
  }

  render() {
    return (
      <Modal darkOverlay closeModal={this.closeModal}>
        <h3>{this.props.name}</h3>
        <p>{this.props.description}</p>
        <DateCompleteWrapper>
          <p>{this.props.date || 'No Deadline'}</p>
          <Button copy='Mark Complete' />
        </DateCompleteWrapper>
      </Modal>
    );
  }
}

export default TaskDetailsModal;
