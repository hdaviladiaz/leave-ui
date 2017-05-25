import React from 'react';
import { shallow } from 'enzyme';
import Menu from './menu';
import MenuItem from '../menuItem/menuItem';

it('should has two menu item', () => {
    const menu = shallow(<Menu />);
    expect(menu.find(MenuItem)).toHaveLength(2);
});