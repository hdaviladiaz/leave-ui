import React from 'react';
import App from './app';
import renderer from 'react-test-renderer';

xit('should render App as snapshot', () => {
  const tree = renderer.create(<App/>).toJSON();
  expect(tree).toMatchSnapshot();
});
