import React from 'react';
import { shallow } from 'enzyme';
import MyRequest from './myRequest';

it('should render myRequest view without crashing', () => {
    shallow(<MyRequest />);
});
