import React from 'react';
import Sidebar from './sidebar';
import renderer from 'react-test-renderer';

xit('should render Sidebar as snapshot', () => {
  const tree = renderer.create(<Sidebar/>).toJSON();
  expect(tree).toMatchSnapshot();
});
