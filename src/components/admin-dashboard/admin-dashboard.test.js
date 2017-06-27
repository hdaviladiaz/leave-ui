import React from 'react';
import AdminDashboard from './admin-dashboard';
import renderer from 'react-test-renderer';
import LeaveRequestService from '../../services/leaveRequestService';

xit('should render AdminDashboard as snapshot', () => {
  LeaveRequestService.getInstance=jest.fn(() => {
    return {
      getRequestAdminList:() => {
        return new Promise((resolve,reject) => {
          return {};
        })
    }}
  });
  const tree = renderer.create(<AdminDashboard/>).toJSON();
  expect(tree).toMatchSnapshot();
});
