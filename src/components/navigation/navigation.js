import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './navigation.css'

class Navigation extends Component {

  constructor(props) {
    super(props);
    this.isAdminClass = "";
    if (!props.isAdmin) {
      this.isAdminClass = "hidden";
    }
  }
  render() {
    return (
      <div className="col-lg-12">
        <div><Link className="btn btn-default navigation-button" to="/">Mis Vacaciones</Link></div>
        <div className={this.isAdminClass} ><Link className="btn btn-default navigation-button" to="/admin">Solicitudes</Link></div>
        <div><a className="btn btn-default navigation-button" >Cerrar Sesion</a></div>
      </div>
    );
  }
}

export default Navigation