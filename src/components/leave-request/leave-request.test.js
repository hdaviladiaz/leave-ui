import React from 'react';
import LeaveRequest from './leave-request.js';
import renderer from 'react-test-renderer';

it('should render LeaveRequest as snapshot', () => {
  const tree = renderer.create(<LeaveRequest/>).toJSON();
  expect(tree).toMatchSnapshot();
});
