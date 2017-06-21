import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import './navigation.css';

class Navigation extends Component {

  checkActive(href) {
    var isActive = this.context.router.route.location.pathname === href;
    return isActive ? 'disabled' : '';
  }

  render() {
    return (
      <div className="col-lg-12">
         <div><Link className={`btn btn-default navigation-button ${this.checkActive("/")}`} to="/">Mis Vacaciones</Link></div>
         <div><Link className={`btn btn-default navigation-button ${this.checkActive("/admin")}`} to="/admin">Solicitudes</Link></div>
         <div><a className="btn btn-default navigation-button" >Cerrar Sesion</a></div>
      </div>
    );
  }
}

Navigation.contextTypes = {
  router: PropTypes.object
};

export default Navigation;
