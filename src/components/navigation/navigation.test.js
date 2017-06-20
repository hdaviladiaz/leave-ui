import React from 'react';
import Navigation from './navigation';
import renderer from 'react-test-renderer';

xit('should render Navigation as snapshot', () => {
  const tree = renderer.create(<Navigation/>).toJSON();
  expect(tree).toMatchSnapshot();
});
