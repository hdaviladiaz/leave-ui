import React from 'react';
import { shallow } from 'enzyme';
import Menu from './menu';


test('should render Menu view without crashing', () => {
    shallow(<Menu />);
});

test('should render Menu view has a NavBar item', () => {
    const wrapper = shallow(<Menu />);
    expect(wrapper.find('Navbar').length, 1);
});