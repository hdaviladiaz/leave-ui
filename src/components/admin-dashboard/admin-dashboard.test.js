import React from 'react';
import AdminDashboard from './admin-dashboard';
import renderer from 'react-test-renderer';

it('should render AdminDashboard as snapshot', () => {
  const tree = renderer.create(<AdminDashboard/>).toJSON();
  expect(tree).toMatchSnapshot();
});
