import React from 'react';
import NewLeaveRequest from './new-leave-request';
import renderer from 'react-test-renderer';

xit('should render NewLeaveRequest as snapshot', () => {
  const tree = renderer.create(<NewLeaveRequest/>).toJSON();
  expect(tree).toMatchSnapshot();
});
