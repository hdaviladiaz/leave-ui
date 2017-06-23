import React from 'react';
import NewLeaveRequest from './new-leave-request';
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

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NewLeaveRequest />, div);
});
