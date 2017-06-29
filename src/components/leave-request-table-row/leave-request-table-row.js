import React, { Component } from 'react'

import './leave-request-table-row.css';



export default class LeaveRequestTableRow extends Component {

  initialize() {
    this.onclick = this.props.onclick || (() => { });
  }
  translateStatus(){
    switch(this.props.request.status){
      case 'pending':return 'pendiente';
      case 'approved':return 'aprobada';
      case 'rejected':return 'rechazada';
      case 'taken':return 'tomada';
      case 'not_taken':return 'no tomada';
    }
  }

  render() {
   this.initialize();

    return (
      <div className="leave-request-table-item">
        <div onClick={this.onclick.bind(this, this.props.request)} className="leave-request-table-item-body">
          <div className="leave-request-table-item-time">{this.props.request.start_date}</div>
          <div className="leave-request-table-item-name">{this.props.request.employee_name}</div>
        </div>
        <div className={`leave-request-table-item-tools`}>
          <span className={`leave-request-table-item-status ${this.props.request.status}`}>{this.translateStatus()}</span>
        </div>
      </div>
    );
  }
}
