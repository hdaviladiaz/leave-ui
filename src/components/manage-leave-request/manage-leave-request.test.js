import React from 'react';
import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import ManageRequestTable from './manage-request-table/manage-request-table';
import ManageLeaveRequest from './manage-leave-request';

describe('manage-leave-request', () => {
  let requests = [];
  let random = 0;
  beforeEach(() => {
    random = (Math.floor(Math.random() * 100));
    for (let i = 1; i <= random; i++) {
      let request = { time: "6:45 PM", name: "Hector" };
      requests.push(request);
    }
  });
  it('should render two sessions with pending and processed requests', () => {
    let wrapper = mount(<ManageLeaveRequest data={requests} />);
    let rows = wrapper.find('ManageRequestTable');
    expect(rows.length).toEqual(2);
  })
});
