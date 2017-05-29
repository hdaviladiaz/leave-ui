import React, { Component } from 'react';
import './home.css';
import Calendar from '../calendar/calendar'

export default class Home extends Component {
    render() {
        return (

            <div className="panel panel-default">
                <div className="panel-heading">TWers Leaves</div>
                <div className="panel-body">
                    <Calendar />
                </div>
            </div>

        );
    }
}