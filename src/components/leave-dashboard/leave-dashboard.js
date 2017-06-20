import React, {Component} from 'react';
import './leave-dashboard.css';
import Overview from '../overview/overview.js'
import LeaveRequest from '../leave-request/leave-request.js'

export default class LeaveDashboard extends Component {

  render() {
    return (
      <div>
        <Overview/>
        <LeaveRequest/>
      </div>
    );
  }
}
