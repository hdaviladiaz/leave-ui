import React, {Component} from 'react';
//import {Navbar, Nav, NavItem, NavDropdown, MenuItem, Glyphicon} from 'react-bootstrap';
//import {LinkContainer} from 'react-router-bootstrap';
import './calendar.css';

export default class Calendar extends Component {

    next360DaysOfTheYear() {
        var today = new Date();
        var dates = [];

        for(var i=0; i<365;i++) {
            today.setDate(today.getDate() + 1);
            dates[i] = today;
        }
        return dates;
    }

    render() {
        return (
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th>TWer</th>
                            {
                                this.next360DaysOfTheYear().map((date, i) =>{
                                    return (<th key={i}>{(date.getMonth() + 1) + '/' + date.getDate()}</th>)
                                })
                            }
                        </tr>
                    </thead>
                    <tbody />
                </table>
            </div>
        )
    }
}