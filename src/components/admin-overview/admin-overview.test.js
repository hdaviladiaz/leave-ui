import React from 'react';
import AdminOverview from './admin-overview';
import renderer from 'react-test-renderer';

it('should render AdminOverview as snapshot', () => {
  const tree = renderer.create(<AdminOverview/>).toJSON();
  expect(tree).toMatchSnapshot();
});
