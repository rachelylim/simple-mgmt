import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';

import Modal from '../modules/modal';
import Button from '../elements/button';
import Input from '../elements/input';
import TextArea from '../elements/textarea';

const DateSaveWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

class CreateTaskModal extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '' };
  }

  closeModal = () => {
    this.props.closeModal && this.props.closeModal();
  }

  createThenClose = () => {
    const params = ['name', 'description', 'deadline'].reduce((obj, field) => {
      const { value } = document.getElementById(field);
      if (value) obj[field] = value;
      return obj;
    }, {});

    params.complete = false;

    this.props.createTask && this.props.createTask(params);
    this.closeModal();
  }

  render() {
    return (
      <Modal darkOverlay closeModal={this.closeModal}>
        <h3>Create a new task</h3>
        <Input label='Name' name='name' type='text' placeholder='Required' />
        <TextArea label='Description' name='description' />
        <DateSaveWrapper>
          <Input label='Deadline' name='deadline' type='date' />
          <Button onclick={this.createThenClose} copy='Save' disabled={!this.state.name} />
        </DateSaveWrapper>
      </Modal>
    );
  }
}

export default CreateTaskModal;
