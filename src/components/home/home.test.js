import React from 'react';
import { shallow } from 'enzyme';
import Home from './home';
import PeopleService from '../../services/PeopleService';
jest.mock('../../services/PeopleService');


describe('Home', () => {

  it('should render Home without crashing', () => {
    shallow(<Home />);
  });

  it('should get person information', () => {
  });
});
