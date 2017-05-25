import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './app';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders welcome message', () => {
 const wrapper = shallow(<App />);
 const welcome = <div className="app">HELLO WORLD!!!</div>;
 expect(wrapper.contains(welcome)).toEqual(true);
});
