import React, {Component} from 'react'
import {Panel} from 'react-bootstrap';
import './manage-leave-request.css';


export default class ManageLeaveRequest extends Component {
  render(){
    return(
      <Panel className='manage-leave-request'>
        <h4>Solicitudes</h4>
      </Panel>
    );
  }
}
