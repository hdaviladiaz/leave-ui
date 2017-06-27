import React, {Component} from 'react';
import './leave-dashboard.css';
import { Route} from 'react-router-dom'
import Overview from '../overview/overview.js'
import LeaveRequest from '../leave-request/leave-request.js'
import NewLeaveRequest from '../new-leave-request/new-leave-request'


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

  render() {
    return (
      <div>
        <Overview days={15} lastRequest={'15-06-2017'}/>
         <PropsRoute
            path='/dashboard/leaves'
            exact={true}
            component={LeaveRequest}
          />
          <PropsRoute
            path='/dashboard/leaves/new'
            exact={true}
            component={NewLeaveRequest}
          />
      </div>
    );
  }
}
