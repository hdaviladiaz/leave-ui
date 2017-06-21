import React from 'react';
import ManageLeaveRequest from './manage-leave-request.js';
import renderer from 'react-test-renderer';

it('should render ManageLeaveRequest as snapshot', () => {
  const tree = renderer.create(<ManageLeaveRequest/>).toJSON();
  expect(tree).toMatchSnapshot();
});
