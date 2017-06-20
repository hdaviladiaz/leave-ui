import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import PropTypes from 'prop-types';

class Navigation extends Component {

  checkActive(href) {
    var isActive = this.context.router.route.location.pathname === href;
    return isActive ? 'disabled' : '';
  }

  render() {
    return (
      <div className="col-lg-12">
        <Button block href="/" className={this.checkActive("/")}>Mis Vacaciones</Button>
        <Button block>Cerrar Sesión</Button>
      </div>
    );
  }
}

Navigation.contextTypes = {
  router: PropTypes.object
};

export default Navigation;
