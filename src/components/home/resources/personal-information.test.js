import React from 'react';
import { shallow } from 'enzyme';
import PersonalInformation from './personal-information';

describe('PersonalInformation', () => {

  it('should render PersonalInformation without crashing', () => {
    shallow(<PersonalInformation />);
  });

});
