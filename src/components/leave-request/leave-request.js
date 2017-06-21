import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import './leave-request.css';
import {_} from 'underscore';

export default class LeaveRequest extends Component {
  constructor(props) {
      super(props);
  }

  render() {
    if(_.isEmpty(this.props.leaves) ||
       _.isNull(this.props.leaves) ||
       _.isUndefined(this.props.leaves)
       ){
            return (
          <Panel className="leave-request text-center">
            <img alt="" src={'img/back.png'}  className="back-image"/>
            <h4 className="gray-color">No has solicitado vacaciones</h4>
          </Panel>
        );
      }

    return (
      <Panel className="leave-request">
        LEAVE REQUEST
      </Panel>
    );
  }
}
