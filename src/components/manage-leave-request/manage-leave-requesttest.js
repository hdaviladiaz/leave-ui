'use strict';
import React from 'react';
import { shallow } from 'enzyme';
import ManageLeaveRequest from './manage-leave-request.js';

describe('ManageLeaveRequest', () => {

  it('should render ManageLeaveRequest component', () => {
    const wrapper = shallow(<ManageLeaveRequest />);
    const instanceManageLeaveRequest = wrapper.instance();
    expect(instanceManageLeaveRequest).toBeInstanceOf(ManageLeaveRequest);
  });
});
