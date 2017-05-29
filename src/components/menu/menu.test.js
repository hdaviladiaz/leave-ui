import React from 'react';
import { shallow } from 'enzyme';
import Menu from './menu';

<<<<<<< HEAD
test('should render Menu view without crashing', () => {
    shallow(<Menu />);
});

test('should render Menu view has a NavBar item', () => {
    const wrapper = shallow(<Menu />);
    expect(wrapper.find('Navbar').length, 1)
=======
it('should has two menu item', () => {
    const menu = shallow(<Menu/>);
    expect(menu.find(MenuItem)).toHaveLength(2);
>>>>>>> c729236... [@hdavila][2]update menu.test to verify the number of MenuItems
});