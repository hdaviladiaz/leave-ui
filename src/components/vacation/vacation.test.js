import React from 'react';
import { shallow } from 'enzyme';
import Vacation from './vacation';

test('should render Vacation view without crashing', () => {
    shallow(<Vacation />);
});
