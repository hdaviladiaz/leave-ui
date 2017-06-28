import React, { Component } from 'react'
import './leave-request-table.css';
import LeaveRequestTableRow from '../leave-request-table-row/leave-request-table-row'
export default class LeaveRequestTable extends Component {


  initialize(){
    this.data = this.props.data || [];
  }


  render() {
    this.initialize();
    return (
      <div className="leave-request-table">
        <div className="leave-request-table-body">
          {this.data.map((request, index) => (
            <LeaveRequestTableRow key={index}
              request={request}
              onclick={this.props.onclick}/>
          ))}
        </div>
      </div>
    );
  }
}
