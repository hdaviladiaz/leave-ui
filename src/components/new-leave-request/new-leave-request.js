import React, {Component} from 'react';
import { Panel } from 'react-bootstrap';
import LeaveCalendar from '../leave-calendar/leave-calendar';
import moment from 'moment';

export default class NewLeaveRequest extends Component {

  constructor(props) {
    super(props),
    this.state = {
      date: moment()
    },
    this.handleDate = this.handleDate.bind(this);
  }

  handleDate(date) {
    this.setState({date: date});
  }

  render() {
    return (
      <div>
          <Panel className="leave-request">
            <LeaveCalendar onSelectDate={this.handleDate}/>
          </Panel>
      </div>
    );
  }
}
