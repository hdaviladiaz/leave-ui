'use strict';
import React from 'react';
import { shallow } from 'enzyme';
import LeaveRequest from './leave-request.js';

describe('LeaveRequest', () => {

  it('should render LeaveRequest component', () => {
    const wrapper = shallow(<LeaveRequest />);
    const instanceLeaveRequest = wrapper.instance();
    expect(instanceLeaveRequest).toBeInstanceOf(LeaveRequest);
  });
});
