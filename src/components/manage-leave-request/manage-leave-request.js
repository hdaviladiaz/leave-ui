import React, { Component } from 'react'
import { Panel } from 'react-bootstrap';
import './manage-leave-request.css';
import ManageRequestTable from './manage-request-table/manage-request-table'


export default class ManageLeaveRequest extends Component {


  render() {
    return (
      <Panel className='manage-leave-request'>
        <h4>Solicitudes</h4>

        <ManageRequestTable
          title='Pendientes'
          data={this.props.pendingRequests}
          onsuccess={this.props.onsuccess}
          onclick={this.props.onclick}
          onfailure={this.props.onfailure} />

        <ManageRequestTable
          title='Procesadas'
          onclick={this.props.onclick}
          data={this.props.processedRequests}
          block="true" />
      </Panel>
    );
  }
}
