import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import LeaveDashboard from './leave-dashboard';
import PeopleService from '../../services/peopleService';
import renderer from 'react-test-renderer';
jest.mock('react-dom');

describe('LeaveDashboard', () => {

  beforeEach(function () {
    window.localStorage = storageMock();
  });

  const vivi = {"employeeId":"15576",
                "preferredName":"Viviana Perez",
                "picture":{"url":"https://jigsaw.thoughtworks.net/consultants/22118/show_picture?style=profile"},
                "hireDate":"2013-08-05",
                "homeOffice":{"name":"Quito"},
                "workingOffice":{"name":"Pune"}}

  function storageMock() {
    var storage = {};
    return {
      setItem: function(key, value) {
        storage[key] = value || '';
      },
      getItem: function(key) {
        return key in storage ? storage[key] : null;
      }
    };
  }

  it('renders a snapshot', () => {
    const tree = renderer.create(<LeaveDashboard/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render people information when person is resolved', () => {
    const component = renderer.create(<LeaveDashboard/>);
    component.getInstance().setState({person: vivi});
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should render error when person is resolved', () => {
    const component = renderer.create(<LeaveDashboard/>);
    component.getInstance().setState({error: {}});
    expect(component.toJSON()).toMatchSnapshot();
  });

});
