import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';

const Wrapper = styled.div`
  padding: 20px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background-color: white;
  z-index: 30;
  overflow: scroll;
  width: 500px;
  border-radius: 4px;
`;

const DarkOverlay = styled.div`
  background: rgba(0, 0, 0, 0.7);
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
`;

const CloseButton = styled.div`
  position: absolute;
  padding: 20px;
  right: 0;
  top: 0;
  cursor: pointer;
`;

const modalOpenBody = css`overflow: hidden; position: relative;`;

class Modal extends Component {
  static get propTypes() {
    return {
      className: PropTypes.string,
      closeModal: PropTypes.func,
      children: PropTypes.array,
      darkOverlay: PropTypes.bool,
      noClose: PropTypes.bool,
      xIconColor: PropTypes.string,
    };
  }

  static get defaultProps() {
    return {
      noClose: false,
    };
  }

  constructor(props) {
    super(props);
    document.body.classList.add(modalOpenBody);
  }

  componentWillUnmount() {
    document.body.classList.remove(modalOpenBody);
  }

  closeModal = (e) => {
    e.preventDefault();
    this.props.closeModal && this.props.closeModal();
  }

  render() {
    return (
      <div>
        <Wrapper className={this.props.className}>
          {!this.props.noClose && <CloseButton onClick={this.closeModal} children='[ Close ]' />}
          {this.props.children}
        </Wrapper>
        {this.props.darkOverlay && <DarkOverlay onClick={this.closeModal} />}
      </div>
    );
  }
}

export default Modal;
