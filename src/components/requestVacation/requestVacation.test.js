import React from 'react';
import { shallow } from 'enzyme';
import RequestVacation from './requestVacation';

it('should render requestVacation without crashing', () => {
    shallow(<RequestVacation />);
});
