import React, { Component } from 'react'
import { Glyphicon } from 'react-bootstrap';
import './manage-request-table-row.css';
import moment from 'moment';


const deleteStatus = 2;
const seccessStatus = 1;
export default class ManageRequestTableRow extends Component {

  initialize() {
    this.successClass = this.deleteClass = "status ";
    this.onsuccess = this.onfailure = () => { };
    this.onclick = this.props.onclick || (() => { });
    if (!this.props.block) {
      this.successClass = "animate text-success ";
      this.deleteClass = "animate text-danger ";
      this.onsuccess = this.props.onsuccess || this.onsuccess;
      this.onfailure = this.props.onfailure || this.onfailure;
    }
    else {
      this.deleteClass += this.props.request.status === deleteStatus ? "text-danger" : "text-none";
      this.successClass += this.props.request.status === seccessStatus ? "text-success" : "text-none";
    }

  }

  render() {
   this.initialize();

    return (
      <div className="manage-request-table-item">
        <div onClick={this.onclick.bind(this, this.props.request)} className="manage-request-table-item-body">
          <div className="manage-request-table-item-time">{this.props.request.start_date}</div>
          <div className="manage-request-table-item-name">{this.props.request.employee_id}</div>
        </div>
        <div className="manage-request-table-item-tools" >
          <span title="Aceptar" onClick={this.onsuccess.bind(this, this.props.request)} className="manage-request-table-item-tools-icon success-icon">
            <Glyphicon
              className={this.successClass}
              glyph="ok-sign" />
          </span>
          <span title="Rechazar" onClick={this.onfailure.bind(this, this.props.request)} className="manage-request-table-item-tools-icon">
            <Glyphicon
              className={this.deleteClass}
              glyph="remove-sign" />
          </span>
        </div>
      </div>
    );
  }
}
