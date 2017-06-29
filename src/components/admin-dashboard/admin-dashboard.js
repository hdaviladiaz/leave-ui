import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './admin-dashboard.css';
import AdminOverview from '../admin-overview/admin-overview.js'
import ManageLeaveRequest from '../manage-leave-request/manage-leave-request.js'
import ApprovedRequests from '../approved-requests/approved-requests.js'
import LeaveRequestService from '../../services/leaveRequestService';
import ReactConfirmAlert, { confirmAlert } from 'react-confirm-alert';
import '../utils/react-confirm-alert-custom.css'
import Modal from 'react-modal';
import Widget from '../widget/widget';
import AlertContainer from 'react-alert';

const pendingStatus = 'pending';

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

export default class AdminDashboard extends Component {

  alertOptions = {
    offset: 14,
    position: 'top right',
    theme: 'dark',
    time: 5000,
    transition: 'scale'
  }

  showAlert = (message) => {
    this.msg.show(message, {
      time: 3000,
      type: 'success'
    })
  }

  constructor(props) {
    super(props);
    this.leaveRequestService = LeaveRequestService.getInstance();
    this.state = {
      modalIsOpen: false,
      request: {}
    };


    this.onsuccess = (request) => {

      let custom = this;
      confirmAlert({
        title: '',
        message: '¿Está seguro que desea aprobar esta solicitud?',
        confirmLabel: 'Comfirmar',
        cancelLabel: 'Cancelar',
        onConfirm: () => {
          this.leaveRequestService
            .updateApproveStatus(request, "approved")
            .then(
            function (response) {
              custom.getLeavesStatus();
              custom.showAlert('Solicitud de vacaciones aprobada.');
            })
            .catch(function (error) {
              console.log(error);
            });
        },
        onCancel: () => { },      // Action after Cancel 
      })
    }


    this.onfailure = (request) => {
      let custom = this;
      confirmAlert({
        title: '',                        // Title dialog 
        message: '¿Está seguro que desea rechazar esta solicitud?',               // Message dialog 
        confirmLabel: 'Confirmar',                           // Text button confirm 
        cancelLabel: 'Cancelar',                             // Text button cancel 
        onConfirm: () => {
          this.leaveRequestService
            .updateApproveStatus(request, "rejected")
            .then(
            function (response) {
              custom.getLeavesStatus();
            })
            .catch(function (error) {
              console.log(error);
            });
        },
        onCancel: () => {},      // Action after Cancel 
      })
    }
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

   translateStatus() {
    switch (this.state.request.status) {
      case 'pending': return 'pendiente';
      case 'approved': return 'aprobada';
      case 'rejected': return 'rechazada';
      case 'taken': return 'tomada';
      case 'not_taken': return 'no tomada';
    }
  }
  componentDidMount() {
    this.getLeavesStatus();
  }

  getLeavesStatus() {
    this.leaveRequestService
      .getRequestsToApprove()
      .then(requests => {
        let pendingRequests = requests.filter((r) => r.status === pendingStatus);
        this.setState({ requests: requests.filter((r) => r.status !== pendingStatus) });
        this.setState({ pendingRequests: pendingRequests });
        this.setState({ numberOfPendingdRequests: pendingRequests.length });
      })
      .catch(error => {
        this.setState({ requests: [] });
        this.setState({ pendingRequests: [] });
        this.setState({ error: error });
        this.setState({ numberOfPendingdRequests: 0 });
      });
  }


  render() {
    return (
      <div>
        <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />

        <AdminOverview
          days={15}
          pendingRequests={this.state.numberOfPendingdRequests} />


        <PropsRoute
          path='/admin/dashboard/'
          exact={true}
          component={ApprovedRequests}
          onsuccess={this.onsuccess}
          onfailure={this.onfailure}
          onclick={this.onclick}
          requests={this.state.requests} />

        <PropsRoute
          path='/admin/dashboard/leaves'
          exact={true}
          component={ManageLeaveRequest}
          onsuccess={this.onsuccess}
          onfailure={this.onfailure}
          onclick={this.onclick}
          pendingRequests={this.state.pendingRequests}
          processedRequests={this.state.requests} />

        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Detalles">
          <div className={`leave-dashboar-modal-status ${this.state.request.status}`}>
            <small>{this.translateStatus()} </small>
          </div>
          <div className="close-modal-container" onClick={this.closeModal.bind(this)}><span >X</span></div>
          <div>

            <div style={{ backgroundImage: "url('img/profile-bg.jpg')" }} className="bg-cover">
              <div className="p-xl text-center">
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
