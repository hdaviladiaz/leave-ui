import React, {Component} from 'react';
import './admin-dashboard.css';
import AdminOverview from '../admin-overview/admin-overview.js'
import ManageLeaveRequest from '../manage-leave-request/manage-leave-request.js'

export default class AdminDashboard extends Component {

  render() {
    return (
      <div>
        <AdminOverview days={15} pendingRequets={3}/>
        <ManageLeaveRequest/>
      </div>
    );
  }
}
