import React from 'react';
import LeaveCalendar from './leave-calendar';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';

function storageMock() {
  var storage = {};
  return {
    setItem: function (key, value) {
      storage[key] = value || '';
    },
    getItem: function (key) {
      return key in storage ? storage[key] : null;
    }
  };
}

beforeEach(() => {
  window.localStorage = storageMock();
});

//BUG: Bug found in react-test-renderer https://github.com/facebook/react/issues/8324 
xit('should render NewLeaveRequest as snapshot', () => {
  const tree = renderer.create(<LeaveCalendar/>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LeaveCalendar />, div);
});
