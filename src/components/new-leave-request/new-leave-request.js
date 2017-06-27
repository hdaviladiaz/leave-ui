import React, { Component } from 'react';
import { Panel, Col } from 'react-bootstrap';
import LeaveCalendar from '../leave-calendar/leave-calendar';
import LeaveRequestService from '../../services/leaveRequestService'
import PeopleService from '../../services/peopleService';
import './new-leave-request.css';
import AlertContainer from 'react-alert';
import moment from 'moment';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import _ from 'underscore';


export default class NewLeaveRequest extends Component {

  alertOptions = {
    offset: 14,
    position: 'bottom left',
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

    super(props),
      this.state = {
        dateFrom: moment(),
        dateTo: moment(),
        haveInformed: false,
        options: []
      },
    this.peopleService = PeopleService.getInstance();
    this.saveLeaveRequest = this.saveLeaveRequest.bind(this);
    this.toggleInformed = this.toggleInformed.bind(this);
    this.leaveRequestService = LeaveRequestService.getInstance();
    this.showAlert = this.showAlert.bind(this);
    this.onSelectChange = this.onSelectChange.bind(this);
  }

  componentDidMount() {
   this.peopleService.getOfficePeople().then(people => this.setState({options: this.mapPeopleToList(people)})).catch(error => this.setState({options: []}));
 }

  handleDateFrom(dateFrom) {
    this.setState({ dateFrom: dateFrom });
    this.setState({ dateTo: dateFrom.add(1, 'days') });
  }

  handleDateTo(dateTo) {
    this.setState({ dateTo: dateTo });
  }

  toggleInformed() {
    this.setState({ haveInformed: !this.state.haveInformed })
  }

  onSelectChange(val) {
    this.setState({approvalPerson: val});
  }

  mapPeopleToList = (people) => {
   return _.map(people, function(person) {
       return {
         value: person.loginName +'@thoughtworks.com',
         label: person.preferredName + ' (' + person.loginName + '@thoughtworks.com' + ')'
       }
   });
  }

  saveLeaveRequest() {
    if (!this.state.haveInformed) {
      this.showAlert('Por favor informe a su equipo y su PM y seleccione la opción.');
      return;
    }   

    this.leaveRequestService
      .createLeaveRequest({ start_date: this.state.dateFrom, end_date: this.state.dateTo, return_date: this.state.dateTo, approver_id: this.state.approvalPerson.value })
      .then(
      function (response) {
        window.location = "/dashboard/leaves";
      })
      .catch(function (error) {
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
                <img className="new-leave-request-date-center-container" src={"/img/leave-line.png"} />
              </div>
            </Col>

            <Col md={5}>
              <div className="new-leave-request-date-left-container">
                <span>Retorno</span>
                 <LeaveCalendar onSelectDate={this.handleDateTo.bind(this)} startDate={this.state.dateFrom.add(1, 'days')} />
              </div>
            </Col>
          </div>
          <div className="new-leave-request-label-center-container">
            <Col md={12}>
              <p>Vinyl tumblr authentic sunt, echo park ea art party XOXO. Stumptown flannel proident, ut voluptate
                  pickled ullamco etsy cillum poke normcore quinoa in thundercats. Non hashtag meditation, pinterest
                  sriracha paleo reprehenderit consectetur bitters waistcoat. Farm-to-table quis viral, taxidermy
                  intelligentsia helvetica culpa next level eu cronut street art kitsch sint vegan. Readymade scenester
                  meditation consequat et cillum fixie velit gastropub dolore gentrify palo santo listicle literally semiotics. </p>

            </Col>
            <Col md={12}>
              <div className="new-leave-request-approver">
                <Select name="form-field-name" value={this.state.approvalPerson} options={this.state.options} onChange={this.onSelectChange}/>
              </div>
            </Col>
          </div>
          <div className="new-leave-request-label-center-container">
            <Col md={12}>
              <input type="checkbox" value="" defaultChecked={this.state.haveInformed} onChange={this.toggleInformed} />
              <label>&nbsp; He confirmado a mi equipo y mi PM </label>
            </Col>
          </div>
          <div className="new-leave-request-button-center-container">
            <Col md={5} />
            <Col md={2}>
              <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
              <button className="buttonSend" onClick={this.saveLeaveRequest.bind(this)}>ENVIAR</button>
            </Col>
            <Col md={5} />
          </div>
        </Panel>
      </div>

    );
  }
}
