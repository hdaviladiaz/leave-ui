import React from 'react';
import Overview from './overview';
import renderer from 'react-test-renderer';

xit('should render Overview as snapshot', () => {
  const tree = renderer.create(<Overview/>).toJSON();
  expect(tree).toMatchSnapshot();
});
