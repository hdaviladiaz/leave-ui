import React, {Component} from 'react';
import {Panel} from 'react-bootstrap';
import moment from 'moment';
import DatePicker from 'react-datepicker'
import './leave-calendar.css';
import _ from 'underscore';
import CalendarService from '../../services/calendarService';

const date = moment().format('YYYY-MM-DD');

export default class LeaveCalendar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      date: this.props.startDate,
      startDate: this.props.startDate,
    };
    this.handleDateChange = this.handleDateChange.bind(this);
    this.isWeekday = this.isWeekday.bind(this);
    this.calendarService = CalendarService.getInstance();
  }

  componentDidMount() {
    this.calendarService
      .getHolidays()
      .then(dates =>
        this.setState({ dates: this.toList(dates) })
      )
      .catch(error => this.setState({ dates: [] }));
  }

  handleDateChange(date) {
      this.setState({date: date});
      this.props.onSelectDate(date);
  }

  isWeekday = (date) => {
    const day = date.day()
    return day !== 0 && day !== 6
  }

  toList = (dates) => {
    return _.map(dates, function (date) {
        return moment(date['date']);
    });
  }

  isHolidaysNextYear = (dates) => {
    let year = _.find(dates, function (date) {
          return date.year() === moment().year() + 1;
    });
    if(year){
      return moment().add(1,'years').endOf('year')
    }
    return moment().endOf('year')
  }

  render() {

    return (
      <div>
        <DatePicker placeholderText="Click to select a date"
          selected={this.state.date}
          fixedHeight={true}
          readOnly={true}
          filterDate={this.isWeekday}
          customInput={< input className = 'col-md-3' type = "text" />}
          minDate={this.state.startDate}
          maxDate={this.isHolidaysNextYear(this.state.dates)}
          excludeDates={this.state.dates}
          calendarClassName="rasta-stripes"
          todayButton={"Hoy"}
          onChange={this.handleDateChange}/>
      </div>
    );
  }
}
