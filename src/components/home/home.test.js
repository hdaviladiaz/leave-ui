import React from 'react';
import { shallow } from 'enzyme';
import Home from './home';

test('should render Home without crashing', () => {
    shallow(<Home />);
});