import React, {Component} from 'react';
import {Panel} from 'react-bootstrap';
import './overview.css';


export default class Overview extends Component {

  constructor() {
    super();
    this.state = {
      currentDate: this.getHumanizedHour()
    }
  }

  getHumanizedHour() {
    let currentDate = new Date();
    let options = { year: 'numeric', month: 'long', day: 'numeric' };
    return currentDate.toLocaleDateString("es-ES", options);
  }

  render() {
    return (
      
      <Panel>
        <div className="oheader">
          <p>{this.state.currentDate}</p>
          <p className="otext">15 dias disponibles</p>
        </div>

        <div className="row row-list">
            <div className="col-xs-3">DIAS DISPONIBLES</div>
            <div className="col-xs-3">ÚLTIMA SOLICITUD</div>
            <div className="col-xs-6"><p>lorem ipsum</p></div>
        </div>
      </Panel>
      
    );
  }

}
