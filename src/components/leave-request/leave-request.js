import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import './leave-request.css';
import {_} from 'underscore';

import LeaveRequestTable from '../leave-request-table/leave-request-table'

export default class LeaveRequest extends Component {

  render() {
    if(_.isEmpty(this.props.requests) ||
       _.isNull(this.props.requests) ||
       _.isUndefined(this.props.requests)
       ){
            return (
          <Panel className="leave-request text-center">
            <img alt="" src={'/img/back.png'}  className="back-image"/>
            <h4 className="gray-color">No has solicitado vacaciones</h4>
          </Panel>
        );
      }

    return (

      <Panel className="leave-request">
        <h4>Mis Vacaciones</h4>
        <LeaveRequestTable
          title='Pendientes'
          data={this.props.requests}
          onclick={this.props.onclick}/>

      </Panel>
    );
  }
}
