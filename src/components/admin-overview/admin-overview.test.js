import React from 'react';
import { shallow } from 'enzyme';
import AdminOverview from './admin-overview';

it('should render AdminOverview without crashing', () => {
  shallow(<AdminOverview />);
});
