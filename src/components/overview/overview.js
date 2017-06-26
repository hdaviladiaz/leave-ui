import React, { Component } from 'react';
import { Panel, Col } from 'react-bootstrap';
import moment from 'moment';
import 'moment/locale/es';
import "./overview.css";
import PropTypes from 'prop-types'

export default class Overview extends Component {

  constructor(props) {
    super(props);
    var today = moment()
    today.localeData('es')
    this.today = today.format('DD MMMM YYYY');
    if (this.props.lastRequest) {
       this.lastRequest = moment(this.props.lastRequest, "DD-MM-YYYY").fromNow().replace('hace','');
    }
  }

  static contextTypes = {
      router: PropTypes.object
  }

  navigate(){
        this.context.router.history.push('/dashboard/leaves/new');
    }

  render() {
    return (
      <Panel>
        <div className="overview">
          <Col xs={12}>
            <h4>{this.today}</h4>
            <span className="text-muted">{this.props.days} dias disponibles</span>
          </Col>
          <Col xs={12} className="overview-box-container no-padding">
            <Col md={4} className="overview-box">
              <div className="overview-box-header gray-color">D&iacute;as Disponibles</div>
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
            <button className = "btn btn-primary"  onClick = {this.navigate.bind(this)}>Solicitar Ahora</button>
            </Col>
          </Col>
        </div>
      </Panel>
    );
  }
}
