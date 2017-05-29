import React from 'react';
import { shallow } from 'enzyme';
import Calendar from './calendar';

test('should render Calendar without crashing', () => {
    shallow(<Calendar />);
});