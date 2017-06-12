'use strict';
import React from 'react';
import { mount } from 'enzyme';
import LeaveRequest from './leave-request.js';

describe('LeaveRequest', () => {

  it('should render LeaveRequest component', () => {
    const wrapper = mount(<LeaveRequest />);
    const inst = wrapper.instance();
    expect(inst).toBeInstanceOf(LeaveRequest);
  });
});
