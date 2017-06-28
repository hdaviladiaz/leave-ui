import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './admin-dashboard.css';
import AdminOverview from '../admin-overview/admin-overview.js'
import ManageLeaveRequest from '../manage-leave-request/manage-leave-request.js'
import LeaveRequestService from '../../services/leaveRequestService';
import Modal from 'react-modal';
import Widget from '../widget/widget';

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

  constructor(props) {
    super(props);
    this.leaveRequestService = LeaveRequestService.getInstance();
    this.state = {
      modalIsOpen: false,
      request: {}
    };


    this.onsuccess = (request) => {
      let custom = this;
      this.leaveRequestService
        .updateApproveStatus(request, "approved")
        .then(
        function (response) {
          custom.getLeavesStatus();
        })
        .catch(function (error) {
          console.log(error);
        });

    }
    this.onfailure = (request) => {
      let custom = this;

      this.leaveRequestService
        .updateApproveStatus(request, "rejected")
        .then(
        function (response) {
          custom.getLeavesStatus();
        })
        .catch(function (error) {
          console.log(error);
        });
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
        <AdminOverview
          days={15}
          pendingRequests={this.state.numberOfPendingdRequests} />

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
          <div className="close-modal-container" onClick={this.closeModal.bind(this)}><span >X</span></div>
          <div>

            <div style={{ backgroundImage: "url('img/profile-bg.jpg')" }} className="bg-cover">
              <div className="p-xl text-center">
                {/*<img src="img/user/09.jpg" alt="Image" className="img-thumbnail img-circle thumb128" />*/}
                <h3 >Hector Davila</h3>
                <p>{this.state.request.employee_id}</p>
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
