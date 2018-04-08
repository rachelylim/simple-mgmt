import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';

import { capitalize } from '../utils';
import { TASK_FILTERS } from '../constants';

import Button from '../elements/button';
import Checkbox from '../elements/checkbox';

const Wrapper = styled.div`
  padding: 15px 25px;
  border-right: 1px solid black;
  height: 100%;
`;

const FilterWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => {
    if (props.slug === 'completed') return 'green';
    if (props.slug === 'due-soon') return 'orange';
    if (props.slug === 'overdue') return 'red';
    return 'white';
  }}
`;

const FilterName = styled.p`
  margin: 10px;
`;

const FilterHeader = styled.h3`
  margin-top: 45px;
  border-bottom: 1px solid lightgrey;
  padding-bottom: 15px;
`;

class SideNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: props.filter,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ filter: nextProps.filter });
  }

  filter = (filter) => () => {
    this.props.setFilter && this.props.setFilter(filter);
  }

  render() {
    return (
      <Wrapper>
        <Button copy='+ Create New Task' onclick={this.props.openTaskCreator(true)} />
        <FilterHeader>Filters:</FilterHeader>
        {TASK_FILTERS.map((slug, id) => (
          <FilterWrapper key={id} slug={slug}>
            <Checkbox onchange={this.filter(slug)} checked={this.state.filter === slug} />
            <FilterName>{capitalize(slug.split('-').join(' '))}</FilterName>
          </FilterWrapper>
        ))}
      </Wrapper>
    );
  }
}

export default SideNav;
