import React from 'react';
import { shallow } from 'enzyme';
import AdminDashboard from './admin-dashboard';

it('should render AdminDashboard without crashing', () => {
  shallow(<AdminDashboard />);
});
