import React, { Component } from 'react';
import styled from 'react-emotion';

class Checkbox extends Component {
  change = () => {
    console.log('changing in checkbox')
    this.props.onchange && this.props.onchange();
  }

  render() {
    return <input type='checkbox' onChange={this.change} checked={this.props.checked} />;
  }
}

export default Checkbox;