import React from 'react';
import { shallow } from 'enzyme';
import LeaveRequest from './leave-request.js';

describe('LeaveRequest', () => {

  it('should render LeaveRequest without crashing', () => {
    shallow(<LeaveRequest />);
  });
});
