import React, { Component } from 'react';
import './admin-dashboard.css';
import AdminOverview from '../admin-overview/admin-overview.js'
import ManageLeaveRequest from '../manage-leave-request/manage-leave-request.js'
import LeaveRequestService from '../../services/leaveRequestService';

export default class AdminDashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
    this.leaveRequestService = LeaveRequestService.getInstance();

    this.onsuccess = (request) => {
      alert("Request Approved");
      console.log("success", request);
    }
    this.onfailure = (request) => {
      alert("Request NOT Approved");
      console.log("failure", request);
    }
    this.onclick = (request) => {
      alert("VIEW REQUEST INFO");
      console.log("click", request);
    }
  }

  componentDidMount() {
    this.leaveRequestService
      .getRequestAdminList()
      .then(requests => {
        // TODO: extract pendings request to another state, when request status is set
        this.setState({ requests: requests });
        this.setState({ numberOfPendingdRequests: requests.length });
      })
      .catch(error => {
        this.setState({ error: error });
        this.setState({ numberOfPendingdRequests: 0 });
      });
  }

  render() {
    return (
      <div>
        <AdminOverview
          days={15}
          pendingRequests={this.state.numberOfPendingdRequests} />

        <ManageLeaveRequest
          onsuccess={this.onsuccess}
          onfailure={this.onfailure}
          onclick={this.onclick}
          pendingRequests={this.state.requests}
          processedRequests={this.state.requests} />
      </div>
    );
  }
}
