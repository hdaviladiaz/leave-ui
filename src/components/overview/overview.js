import React, { Component } from 'react';
import { Panel, Col } from 'react-bootstrap';
import moment from 'moment';
import 'moment/locale/es';
import "./overview.css"


export default class Overview extends Component {

  constructor(props) {
    super(props);
    var today = moment()
    today.lang('es')
    this.today = today.format('DD MMMM YYYY');
    if (this.props.lastRequest) {
       this.lastRequest = moment(this.props.lastRequest, "DD-MM-YYYY").fromNow().replace('hace','');
    }
  }

  render() {
    return (
      <Panel>
        <div className="overview">
          <h4>{this.today}</h4>
          <span className="text-muted">{this.props.days} dias disponibles</span>
          <div className="overview-box-container">
            <Col md={4} className="overview-box">
              <div className="overview-box-header">D&iacute;as Disponibles</div>
              <div className="overview-box-body">
                <div className="overview-box-title">{this.props.days}</div>
              </div>

            </Col>
            <Col md={4} className="overview-box">
              <div className="overview-box-header">&Uacute;ltima solicitud</div>
              <div className="overview-box-body">
                <div className="overview-box-title">{this.lastRequest || "n/a"}</div>
                <div className="text-muted">{this.props.lastRequest}</div>
              </div>
            </Col>
            <Col md={4} className="overview-box last overview-box-center">
              <a className="btn btn-primary">Solicitar Ahora</a>
            </Col>
          </div>
        </div>
      </Panel>
    );
  }

}
