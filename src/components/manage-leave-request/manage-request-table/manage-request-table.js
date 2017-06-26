import React, { Component } from 'react'
import './manage-request-table.css';
import ManageRequestTableRow from '../manage-request-table-row/manage-request-table-row'
export default class ManageRequestTable extends Component {


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
      <div className="manage-request-table">
        <div className="manage-request-table-title">{this.props.title}</div>
        <div className="manage-request-table-body">
          {this.data.map((request, index) => (
            <ManageRequestTableRow key={index}
              request={request}
              onsuccess={this.props.onsuccess}
              onfailure={this.props.onfailure}
              onclick={this.props.onclick}
              block={this.props.block} />
          ))}
          <div className={`manage-request-table-no-elements ${this.noElementsClass}`}>NO HAY ELEMENTOS</div>
        </div>
      </div>
    );
  }
}
