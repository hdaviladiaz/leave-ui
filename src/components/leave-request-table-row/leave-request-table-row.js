import React, { Component } from 'react'
import I18n from '../../services/i18n';
import './leave-request-table-row.css';



export default class LeaveRequestTableRow extends Component {

  initialize() {
    this.onclick = this.props.onclick || (() => { });
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
          <span className={`leave-request-table-item-status ${this.props.request.status}`}>{I18n.translate(this.props.request.status)}</span>
        </div>
      </div>
    );
  }
}
