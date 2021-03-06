import React, { Component } from 'react'
import { Glyphicon } from 'react-bootstrap';
import './manage-request-table-row.css';
import I18n from '../../../services/i18n';

export default class ManageRequestTableRow extends Component {

  initialize() {
   this.showToolClass='hidden';
   this.showStatusClass='';
    this.onsuccess = this.onfailure = () => { };
    this.onclick = this.props.onclick || (() => { });
    if (!this.props.block) {
      this.onsuccess = this.props.onsuccess || this.onsuccess;
      this.onfailure = this.props.onfailure || this.onfailure;
      this.showToolClass='show';
      this.showStatusClass='hidden';
    }
  }

  render() {
   this.initialize();

    return (
      <div className="manage-request-table-item">
        <div onClick={this.onclick.bind(this, this.props.request)} className="manage-request-table-item-body">
          <div className="manage-request-table-item-time">{this.props.request.start_date}</div>
          <div className="manage-request-table-item-name">{this.props.request.employee_name}</div>
        </div>
        <div className={`manage-request-table-item-tools ${this.showToolClass}`}>
          <span title="Aceptar" onClick={this.onsuccess.bind(this, this.props.request)} className="manage-request-table-item-tools-icon success-icon">
            <Glyphicon
              className='text-success animate'
              glyph="ok-sign" />
          </span>
          <span title="Rechazar" onClick={this.onfailure.bind(this, this.props.request)} className="manage-request-table-item-tools-icon">
            <Glyphicon
              className='text-danger animate'
              glyph="remove-sign" />
          </span>
        </div>
        <div className={`manage-request-table-item-tools ${this.showStatusClass}`}>
          <span className={`leave-request-table-item-status ${this.props.request.status}`}>{I18n.translate(this.props.request.status)}</span>
        </div>
      </div>
    );
  }
}
