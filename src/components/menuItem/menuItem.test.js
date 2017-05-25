import React from 'react';
import { shallow, mount } from 'enzyme';
import MenuItem from './menuItem';
import { MemoryRouter } from 'react-router-dom';

it('renders menuItem with title', () => {
    var linkName = "First Link";
    const menu = mount(
        <MemoryRouter initialEntries={['/requestVacation']}>
            <MenuItem name={linkName} route="/requestVacation" />
        </MemoryRouter>);
    expect(menu.text()).toContain(linkName);
});