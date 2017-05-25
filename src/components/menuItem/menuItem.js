import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class MenuItem extends Component {
    render() {
        return (
            <li>
                <NavLink
                    to={this.props.route} >
                    {this.props.name}
                </NavLink>
            </li>
        );
    }
}

export default MenuItem;
