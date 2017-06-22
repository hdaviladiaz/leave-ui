import React from 'react'
import { Route} from 'react-router-dom'
import AdminDashboard from '../admin-dashboard/admin-dashboard';
import LeaveDashboard from '../leave-dashboard/leave-dashboard';
import NewLeaveRequest from '../new-leave-request/new-leave-request';
import Auth from '../auth/auth';
const routes = [
  { path: '/',
    exact: true,
    component: LeaveDashboard
  },
  { path: '/admin',
    exact: true,
    component: AdminDashboard
  },
  { path: '/auth/:token',
    exact: true,
    component: Auth
  },
  { path: '/new-leave-request',
    exact: true,
    component: NewLeaveRequest
  }
];

export default class Dashboard extends React.Component {
    render() {
    return (
        <div >
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))}
        </div>
      )
    }
}
