import React, {Component} from 'react';
import { Panel, Col } from 'react-bootstrap';
import LeaveCalendar from '../leave-calendar/leave-calendar';
import moment from 'moment';
import LeaveRequestService from '../../services/leaveRequestService'
import './new-leave-request.css';
import { Alert } from 'react-bootstrap';
import AlertContainer from 'react-alert';

const date = moment().add(1, 'days');

export default class NewLeaveRequest extends Component {

  alertOptions = {
   offset: 14,
   position: 'bottom left',
   theme: 'dark',
   time: 5000,
   transition: 'scale'
 }

 showAlert = () => {
     this.msg.show('La fecha de inicio no puede ser mayor a la fecha de fin.', {
       time: 2000,
       type: 'success'
     })
   }

  constructor(props) {

    super(props),
    this.state = {
      dateFrom: moment(),
      dateTo: date,
      haveInformed: false
    },
    this.saveLeaveRequest = this.saveLeaveRequest.bind(this);
    this.toggleInformed = this.toggleInformed.bind(this);
    this.leaveRequestService = LeaveRequestService.getInstance();
    this.showAlert = this.showAlert.bind(this);
    console.log(this.state.dateTo);
  }

  handleDateFrom(dateFrom) {
    this.setState({dateFrom:dateFrom});
  }

  handleDateTo(dateTo) {
    this.setState({dateTo:dateTo});
  }

  toggleInformed(){
    this.setState({haveInformed: !this.state.haveInformed})
  }

  saveLeaveRequest(){

  if (this.state.dateFrom > this.state.dateTo) {
    this.showAlert()
     } else {
        this.leaveRequestService.createLeaveRequest({ employee_id: 99, start_date: this.state.dateFrom, end_date:this.state.dateTo, return_date: this.state.dateTo});
    }
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
                 <LeaveCalendar onSelectDate={this.handleDateFrom.bind(this)}/>
               </div>
             </Col>

             <Col md={2}>
               <div>
                <img className="new-leave-request-date-center-container" src={"/img/leave-line.png"}/>
               </div>
             </Col>

             <Col md={5}>
               <div className="new-leave-request-date-left-container">
                 <span>Fin</span>
                 <LeaveCalendar selected={this.state.dateTo} onSelectDate={this.handleDateTo.bind(this)}/>
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
            </div>
            <div className="new-leave-request-label-center-container">
              <Col md={12}>
                <input type="checkbox" value="" defaultChecked={this.state.haveInformed} onChange={this.toggleInformed}/>
                <label>&nbsp; He confirmado a mi equipo y mi PM </label>
              </Col>
            </div>
            <div className="new-leave-request-button-center-container">
              <Col md={5}/>
                <Col  md={2}>
                  <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
                  <button className="buttonSend" onClick={this.saveLeaveRequest}>ENVIAR</button>
                </Col>
              <Col md={5}/>
            </div>
          </Panel>
      </div>

    );
  }
}
