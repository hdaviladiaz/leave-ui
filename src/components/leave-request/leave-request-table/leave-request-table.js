import React, { Component } from 'react'
import './leave-request-table.css';
import ManageRequestTableRow from '../leave-request-table-row/leave-request-table-row'
export default class LeaveRequestTable extends Component {


  initialize(){
    this.data = this.props.data || [];
    this.noElementsClass = "hidden";
    if (this.data.length === 0) {
      this.noElementsClass = "";
    }
  }


  render() {
    this.initialize();
    return (
      <div className="leave-request-table">
        <div className="leave-request-table-title">{this.props.title}</div>
        <div className="leave-request-table-body">
          {this.data.map((request, index) => (
            <ManageRequestTableRow key={index}
              request={request}
              onsuccess={this.props.onsuccess}
              onfailure={this.props.onfailure}
              onclick={this.props.onclick}
              block={this.props.block} />
          ))}
          <div className={`leave-request-table-no-elements ${this.noElementsClass}`}>NO HAY ELEMENTOS</div>
        </div>
      </div>
    );
  }
}
