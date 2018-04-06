import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const StyledButton = styled.button`
  width: 200px;
  height: 45px;
  border-radius: 4px;
  border: 1px solid black;
  padding: 15px;
  cursor: pointer;
  transition: box-shadow 300ms ease-out;

  &:hover {
    box-shadow: 0 5px 15px 0 rgba(0,0,0,0.15);
  };
`;

class Button extends Component {
  static get propTypes() {
    return {
      copy: PropTypes.string,
      onclick: PropTypes.func,
    }
  }

  handleClick = () => {
    this.props.onclick && this.props.onclick();
  }

  render() {
    return (
      <StyledButton onClick={this.handleClick}>
        {this.props.copy}
      </StyledButton>
    );
  }
}

export default Button;
