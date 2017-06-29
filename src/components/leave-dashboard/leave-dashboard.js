import React, { Component } from 'react';
import './leave-dashboard.css';
import { Route } from 'react-router-dom'
import Overview from '../overview/overview.js'
import LeaveRequest from '../leave-request/leave-request.js'
import NewLeaveRequest from '../new-leave-request/new-leave-request'
import LeaveRequestService from '../../services/leaveRequestService';
import Modal from 'react-modal';
import I18n from '../../services/i18n';
import Widget from '../widget/widget';

const customStyles = {
  content: {
    width: '800px',
    top: '35%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};
const renderMergedProps = (component, ...rest) => {
  const finalProps = Object.assign({}, ...rest);
  return (
    React.createElement(component, finalProps)
  );
}

const PropsRoute = ({ component, ...rest }) => {
  return (
    <Route {...rest} render={routeProps => {
      return renderMergedProps(component, routeProps, rest);
    }} />
  );
}

export default class LeaveDashboard extends Component {


  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      request: {}
    };

    this.leaveRequestService = LeaveRequestService.getInstance();

    this.onclick = (request) => {
      this.setState({ modalIsOpen: true });
      this.setState({ request: request });
    }

    this.closeModal = () => {
      this.setState({ modalIsOpen: false });
    }
    this.onclick = this.onclick.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  
  componentDidMount() {
    this.leaveRequestService
      .getRequests()
      .then(requests => {
        this.setState({ requests: requests });
      })
      .catch(error => {
        this.setState({ requests: [] });
        this.setState({ error: error });
      });
  }
  render() {
    return (
      <div>
        <Overview days={15} lastRequest={'15-06-2017'} />
        <PropsRoute
          path='/dashboard/leaves'
          exact={true}
          component={LeaveRequest}
          requests={this.state.requests}
          onclick={this.onclick}
        />
        <PropsRoute
          path='/dashboard/leaves/new'
          exact={true}
          component={NewLeaveRequest}
        />

        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Detalles">
          <div className={`leave-dashboar-modal-status ${this.state.request.status}`}>
            <small>{I18n.translate(this.state.request.status)} </small>
          </div>
          <div className="close-modal-container" onClick={this.closeModal.bind(this)}><span >X</span></div>
          <div>

            <div style={{ backgroundImage: "url('img/profile-bg.jpg')" }} className="bg-cover">
              <div className="p-xl text-center leave-dashboard-modal-header">
                {/*<img src="img/user/09.jpg" alt="Image" className="img-thumbnail img-circle thumb128" />*/}
                <h3 >{this.state.request.employee_name}</h3>
                <p>{this.state.request.employee_id}</p>
                <p><b>Aprobador: </b>{this.state.request.approver_id}</p>
              </div>
            </div>

            <div className="text-center bg-gray-dark p-lg mb-xl">
              <div className="row row-table">
                <div className="col-xs-4 br">
                  <Widget
                    title="D&iacute;as Tomados"
                    value="3"
                    bgClass="bg-primary"
                    icon="glyphicon glyphicon-calendar" />
                </div>
                <div className="col-xs-4 br">
                  <Widget
                    title="D&iacute;as Restante"
                    value="14"
                    bgClass="bg-success"
                    icon="glyphicon glyphicon-calendar" />
                </div>
                <div className="col-xs-4">
                  <Widget
                    title="Total de D&iacute;as"
                    value="17"
                    bgClass="bg-gray"
                    icon="glyphicon glyphicon-calendar" />

                </div>
              </div>
              <div>
                <div className="col-xs-4 ">
                  <div className="upper-title">Fecha de Inicio</div>
                  <span>{this.state.request.start_date}</span>
                </div>
                <div className="col-xs-4 ">
                  <div className="upper-title">Fecha de Retorno</div>
                  <span>{this.state.request.return_date}</span>
                </div>
                <div className="col-xs-4 ">
                  <div className="upper-title">Fecha de Fin</div>
                  <span>{this.state.request.end_date}</span>
                </div>

              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}
