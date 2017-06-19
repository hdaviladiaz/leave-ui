import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Home from './home';
import PeopleService from '../../services/PeopleService';
import renderer from 'react-test-renderer';
jest.mock('react-dom');
var axios = require('axios');
var MockAdapter = require('axios-mock-adapter');
var mock = new MockAdapter(axios);

describe('Home', () => {

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
    const tree = renderer.create(<Home/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render people information when person is resolved', () => {
    const component = renderer.create(<Home/>);
    component.getInstance().setState({person: vivi});
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should render eroor when person is resolved', () => {
    const component = renderer.create(<Home/>);
    component.getInstance().setState({error: {}});
    expect(component.toJSON()).toMatchSnapshot();
  });

});
