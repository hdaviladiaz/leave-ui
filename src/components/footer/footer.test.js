import React from 'react';
import Footer from './footer';
import renderer from 'react-test-renderer';

it('should render Footer as snapshot', () => {
  const tree = renderer.create(<Footer/>).toJSON();
  expect(tree).toMatchSnapshot();
});
