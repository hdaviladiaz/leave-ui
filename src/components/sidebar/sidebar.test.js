import React from 'react';
import { shallow } from 'enzyme';
import Sidebar from './sidebar';

it('should render Sidebar without crashing', () => {
  shallow(<Sidebar />);
});
