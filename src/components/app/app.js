import Dashboard from '../dashboard/dashboard'
import React, { Component } from 'react';
import Sidebar from '../sidebar/sidebar'
import {Col} from 'react-bootstrap';
import './app.css';

export default class App extends Component {
  render() {
    return (
      <div className="app fill">
        <Col xs={3}>
          <Sidebar />
        </Col>
        <Col xs={9} className="bg-color">
          <Dashboard/>
        </Col>
      </div>
    );
  }
}
