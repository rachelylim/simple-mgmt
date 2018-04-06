import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';

import Button from '../elements/button';

const Wrapper = styled.div`
  padding: 15px 25px;
  border-right: 1px solid black;
  height: 100%;
`;

class SideNav extends Component {
  render() {
    return (
      <Wrapper>
        <Button copy='+ Create New Task' onclick={this.props.openTaskCreator(true)} />
      </Wrapper>
    )
  }
}

export default SideNav;
