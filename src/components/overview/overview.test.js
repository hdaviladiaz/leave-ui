import React from 'react';
import { shallow } from 'enzyme';
import Overview from './overview';

it('should render Overview without crashing', () => {
  shallow(<Overview />);
});
