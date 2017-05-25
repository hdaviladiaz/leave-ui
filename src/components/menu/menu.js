import React, { Component } from 'react';
import MenuItem  from '../menuItem/menuItem';

class Menu extends Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand">Leave</a>
                    </div>
                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <MenuItem
                              name="Solicitar"
                              route="requestVacation"
                            />
                            <MenuItem
                              name="Mis Solicitudes"
                              route="myRequest"
                            />
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Menu;
