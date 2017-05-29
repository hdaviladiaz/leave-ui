import React from 'react';
import { shallow } from 'enzyme';
import MedicalLeave from './medicalLeave';

test('should render MedicalLeave without crashing', () => {
    shallow(<MedicalLeave />);
});
