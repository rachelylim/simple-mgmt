import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';

const Wrapper = styled.div`
  display: flex;
  border: 1px solid black;
  border-radius: 4px;
  margin: 10px;
  padding: 15px;
`;

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = { selected: false };
  }

  renderSelectedMode() {
    console.log('selected');
    return null;
  }

  toggleSelection = (selected) => () => {
    this.setState({ selected });
  }

  renderListMode() {
    return (
      <Wrapper onClick={this.toggleSelection(true)}>
        {this.props.name}
        {this.props.complete}
      </Wrapper>
    );
  }

  render() {
    return this.state.selected ? this.renderSelectedMode() : this.renderListMode();
  }
}

export default Task;
