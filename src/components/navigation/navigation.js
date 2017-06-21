import React, {Component} from 'react';
import {Link} from 'react-router-dom'


class Navigation extends Component {
  render() {
    return (
      <div className="col-lg-12">
         <div><Link className="btn btn-default" to="/">Home</Link></div>
         <div><Link className="btn btn-default" to="/admin">Admin</Link></div>
         <div><Link className="btn btn-default" to="/auth">Auth</Link></div>
      </div>
    );
  }
}

export default Navigation