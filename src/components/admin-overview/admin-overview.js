import React, { Component } from 'react';
import { Panel, Col } from 'react-bootstrap';
import moment from 'moment';
import 'moment/locale/es';
import "./admin-overview.css"

export default class AdminOverview extends Component {

  constructor(props) {
    super(props);
    var today = moment()
    today.localeData('es')
    this.today = today.format('DD MMMM YYYY');
  }
  render() {
    return (
     <Panel>
        <div className="admin-overview">
          <h4>{this.today}</h4>
          <span className="text-muted">{this.props.days} dias disponibles</span>
          <div className="admin-overview-box-container">
            <Col md={4} className="admin-overview-box">
              <div className="admin-overview-box-header">Pendientes</div>
              <div className="admin-overview-box-body">
                <div className="admin-overview-box-title">{this.props.pendingRequets}</div>
              </div>

            </Col>
            <Col md={8} className="admin-overview-box last admin-overview-box-center">
              
            </Col>
          </div>
        </div>
      </Panel>
    );
  }

}
