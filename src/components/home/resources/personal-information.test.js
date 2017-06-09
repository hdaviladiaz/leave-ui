import React from 'react';
import { shallow } from 'enzyme';
import PersonalInformation from './personal-information';
import renderer from 'react-test-renderer';

describe('PersonalInformation', () => {

  const vivi = {"employeeId":"15576",
                "preferredName":"Viviana Perez",
                "picture":{"url":"https://jigsaw.thoughtworks.net/consultants/22118/show_picture?style=profile"},
                "hireDate":"2013-08-05",
                "homeOffice":{"name":"Quito"},
                "workingOffice":{"name":"Pune"}}

  it('should render without crashing', () => {
    const wrapper = shallow(<PersonalInformation person={vivi} error={false} />);
    expect(wrapper).toMatchSnapshot();
  });

});
