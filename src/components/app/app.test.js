import React from 'react';
import { shallow } from 'enzyme';
import App from './app';

it('should render App without crashing', () => {
  shallow(<App />);
});
