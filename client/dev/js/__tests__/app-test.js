import React from 'react';
import { mount, shallow } from 'enzyme';

import App from '../components/app';
import List from '../components/list';
import { defaultProps, filterProps } from './mocks';

describe('Simple Task Management App', () => {
  describe('When the app has tasks', () => {
    const app = mount(<App {...defaultProps} />);
    const numberOfTasks = defaultProps.tasks.length;
    const numberOfRenderedTasks = app.find('Task').length;

    it('can create a new task', () => {
      expect(1).toEqual(1);
    });

    it('can render all tasks', () => {
      expect(numberOfTasks).toEqual(numberOfRenderedTasks);
    });
  });

  describe('When the app is filtered', () => {
    const app = mount(<App {...filterProps} />);
    const numberOfTasks = defaultProps.tasks.length;
    const numberOfRenderedTasks = app.find('Task').length;
    it('can filter for only completed tasks', () => {
      expect(numberOfTasks > numberOfRenderedTasks).toBeTruthy();
    });
  })

})