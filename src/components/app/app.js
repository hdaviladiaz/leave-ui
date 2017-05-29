import React, { Component } from 'react';
import './app.css';
import Menu from '../menu/menu'

export default class App extends Component {
  render() {
    return (

      <div className="app">
        <Menu />
        <div className="container">
          {this.props.children}
        </div>
      </div>

    );
  }
}