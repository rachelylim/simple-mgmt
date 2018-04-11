import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

class Checkbox extends Component {
  static get propTypes() {
    return {
      checked: PropTypes.bool,
      onchange: PropTypes.func,
    }
  }

  change = () => {
    this.props.onchange && this.props.onchange();
  }

  render() {
    return (
      <input
        type='checkbox'
        onChange={this.change}
        checked={this.props.checked}
      />
    );
  }
}

export default Checkbox;
