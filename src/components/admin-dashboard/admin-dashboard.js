import React, { Component } from 'react';
import './admin-dashboard.css';
import AdminOverview from '../admin-overview/admin-overview.js'
import ManageLeaveRequest from '../manage-leave-request/manage-leave-request.js'

export default class AdminDashboard extends Component {

  constructor(props) {
    super(props);
    this.pendingRequests = [
      { time: "6:45 PM", name: "Hector Davila", status: 2 },
      { time: "6:45 PM", name: "Juan Perez", status: 1 },
      { time: "6:45 PM", name: "Alfonso Davila", status: 2 },
      { time: "6:45 PM", name: "Victor Cruz", status: 1 },
    ];
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

  render() {
    return (
      <div>
        <AdminOverview
          days={15}
          pendingRequests={this.pendingRequests.length} />

        <ManageLeaveRequest
          onsuccess={this.onsuccess}
          onfailure={this.onfailure}
          onclick={this.onclick}
          pendingRequests={this.pendingRequests}
          processedRequests={this.pendingRequests} />
      </div>
    );
  }
}
