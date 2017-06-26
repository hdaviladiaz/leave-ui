import React from 'react'
import { Route} from 'react-router-dom'
import AdminDashboard from '../admin-dashboard/admin-dashboard';
import LeaveDashboard from '../leave-dashboard/leave-dashboard';
import Auth from '../auth/auth';
const routes = [
  { path: '/',
    exact: true,
    component: LeaveDashboard
  },
  { path: '/dashboard',
    exact: false,
    component: LeaveDashboard
  },
  { path: '/admin/dashboard',
    exact: false,
    component: AdminDashboard
  },
  { path: '/auth/:token',
    exact: true,
    component: Auth
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
