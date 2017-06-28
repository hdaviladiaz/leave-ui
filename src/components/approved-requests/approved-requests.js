import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import {_} from 'underscore';

import LeaveRequestTable from '../leave-request-table/leave-request-table'

export default class ApprovedRequests extends Component {

    render() {
      if(_.isEmpty(this.props.requests) ||
         _.isNull(this.props.requests) ||
         _.isUndefined(this.props.requests)
         ){
              return (
            <Panel className="leave-request text-center">
              <img alt="" src={'/img/back.png'}  className="back-image"/>
              <h4 className="gray-color">No hay solicitudes Procesadas</h4>
            </Panel>
          );
        }

      return (

        <Panel className="leave-request">
          <h4>Solicitudes</h4>
          <LeaveRequestTable
            title='Aprobadas'
            data={this.props.requests}
            onclick={this.props.onclick}/>
        </Panel>
      );
    }
  }
