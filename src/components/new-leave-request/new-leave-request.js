import React, { Component } from 'react';
import { Panel, Col } from 'react-bootstrap';
import LeaveCalendar from '../leave-calendar/leave-calendar';
import LeaveRequestService from '../../services/leaveRequestService'
import PeopleService from '../../services/peopleService';
import './new-leave-request.css';
import Loader from 'react-loader';
import AlertContainer from 'react-alert';
import moment from 'moment';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import _ from 'underscore';
import PropTypes from 'prop-types'

export default class NewLeaveRequest extends Component {

  static contextTypes = {
    router: PropTypes.object
  }

  alertOptions = {
    offset: 14,
    position: 'top right',
    theme: 'dark',
    time: 5000,
    transition: 'scale'
  }

  loaderOptions = {
    lines: 13,
    length: 20,
    width: 10,
    radius: 30,
    scale: 1.00,
    corners: 1,
    color: '#000',
    opacity: 0.25,
    rotate: 0,
    direction: 1,
    speed: 1,
    trail: 60,
    fps: 20,
    zIndex: 2e9,
    top: '50%',
    left: '50%',
    shadow: false,
    hwaccel: false,
    position: 'absolute'
  }

  showAlert = (message) => {
    this.msg.show(message, {
      time: 3000,
      type: 'success'
    })
  }

  constructor(props) {
    super(props);
    this.state = {
      dateFrom: moment(),
      dateTo: moment().add(1, 'days'),
      haveInformed: false,
      approvalPerson: {},
      loaded: true,
      options: []
    };
    this.peopleService = PeopleService.getInstance();
    this.saveLeaveRequest = this.saveLeaveRequest.bind(this);
    this.toggleInformed = this.toggleInformed.bind(this);
    this.leaveRequestService = LeaveRequestService.getInstance();
    this.showAlert = this.showAlert.bind(this);
    this.onSelectChange = this.onSelectChange.bind(this);
  }

  componentDidMount() {
    this.peopleService.getOfficePeople().then(people => this.setState({ options: this.mapPeopleToList(people) })).catch(error => this.setState({ options: [] }));
  }

  handleDateFrom(dateFrom) {
    this.setState({ dateFrom: dateFrom });
  }

  handleDateTo(dateTo) {
    this.setState({ dateTo: dateTo });
  }

  toggleInformed() {
    this.setState({
      haveInformed: !this.state.haveInformed
    })
  }

  onSelectChange(val) {
    this.setState({ approvalPerson: val });
  }

  mapPeopleToList = (people) => {
    return _.map(people, function (person) {
      return {
        value: person.loginName + '@thoughtworks.com',
        label: person.preferredName + ' (' + person.loginName + '@thoughtworks.com)'
      }
    });
  }


  saveLeaveRequest() {

    this.setState({ loaded: false });

    if (!this.state.haveInformed) {
      this.showAlert('Por favor informe a su equipo y su PM y seleccione la opción.');
      this.setState({ loaded: true });
      return;
    }

    if (this.state.approvalPerson == null || this.state.approvalPerson.value === undefined) {
      this.showAlert('Por favor seleccione un aprobador.');
      this.setState({ loaded: true });
      return;
    }

    if (this.state.dateFrom.isAfter(this.state.dateTo) || this.state.dateFrom.isSame(this.state.dateTo)) {
      this.showAlert('La fecha de inicio no puede ser mayor o igual a la fecha de retorno.');
      this.setState({ loaded: true });
      return;
    }

    this.leaveRequestService.createLeaveRequest({ start_date: this.state.dateFrom, end_date: this.state.dateTo, return_date: this.state.dateTo, approver_id: this.state.approvalPerson.value }).then(() => {
      this.setState({ loaded: true });
      window.location = "/dashboard/leaves";
    }).catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div>

        <Panel className="leave-request">
          <h3>Solicitud de vacaciones</h3>
          <div className="new-leave-request-container">
            <Col md={5}>
              <div className="new-leave-request-date-right-container">
                <span>Inicio</span>
                <LeaveCalendar onSelectDate={this.handleDateFrom.bind(this)} startDate={moment()} />
              </div>
            </Col>

            <Col md={2}>
              <div>
                <img alt="" className="new-leave-request-date-center-container" src={"/img/leave-line.png"} />
              </div>
            </Col>

            <Col md={5}>
              <div className="new-leave-request-date-left-container">
                <span>Fin</span>
                <LeaveCalendar onSelectDate={this.handleDateTo.bind(this)} startDate={moment().add(1, 'days')} />
              </div>
            </Col>
          </div>

          <div className="new-leave-request-approver">
            <Col md={12}>
              <span>Solicitar aprobaci&#243;n a:</span>
              <Select name="form-field-name" value={this.state.approvalPerson} options={this.state.options} onChange={this.onSelectChange} />
            </Col>
          </div>

          <div className="new-leave-request-label-center-container">
            <Col md={12}>
              <i>Vinyl tumblr authentic sunt, echo park ea art party XOXO. Stumptown flannel proident, ut voluptate pickled ullamco etsy cillum poke normcore quinoa in thundercats. Non hashtag meditation, pinterest sriracha paleo reprehenderit consectetur bitters waistcoat. Farm-to-table quis viral, taxidermy intelligentsia helvetica culpa next level eu cronut street art kitsch sint vegan. Readymade scenester meditation consequat et cillum fixie velit gastropub dolore gentrify palo santo listicle literally semiotics.
              </i>
            </Col>
          </div>

          <div className="new-leave-request-checker">
            <Col md={12}>
              <input type="checkbox" value="" defaultChecked={this.state.haveInformed} onChange={this.toggleInformed} />
              <label>&nbsp; He confirmado con mi equipo y mi l&#237;der de proyecto
              </label>
            </Col>
          </div>
          <Loader loaded={this.state.loaded} options={this.loaderOptions}>
            <div className="new-leave-request-button-center-container">
              <Col md={5} />
              <Col md={2}>
                <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
                <button className="buttonSend" onClick={this.saveLeaveRequest.bind(this)}>ENVIAR</button>
              </Col>
              <Col md={5} />
            </div>
          </Loader>
        </Panel>

      </div>

    );
  }
}
