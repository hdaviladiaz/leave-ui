import React, { Component } from 'react';
import {Breadcrumb} from 'react-bootstrap';
import './home.css';

export default class Home extends Component {

    getTWerInformations() {
        return {
            name: "Marcio Alves Barroso",
            mail: "malvesb@thoughtworks.com",
            genre: "Mas",
            grade: "DEV",
            role: "Sr Con",
            hired: "2015-05-15",
            availableDays: 8,
            leaves: [
                {start: '2015-12-24', end: '2016-01-02', days: '10', type: 'Anual Leave'},
                {start: '2016-02-22', end: '2016-03-05', days: '12', type: 'Medical Leave'}
            ]
        }
    }

    render() {

        const TWer = this.getTWerInformations();

        return (
            <div>

                <Breadcrumb>
                    <Breadcrumb.Item href="#">
                        Home
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active href="/">
                        TWer Informations
                    </Breadcrumb.Item>
                </Breadcrumb>

                <h4>TWer Informations</h4>

                <dl className="dl-horizontal">
                    <dt>Name</dt><dd>{TWer.name}</dd>
                    <dt>E-mail</dt><dd>{TWer.mail}</dd>
                    <dt>Genre</dt><dd>{TWer.genre}</dd>
                    <dt>Grade</dt><dd>{TWer.grade}</dd>
                    <dt>Role</dt><dd>{TWer.role}</dd>
                    <dt>Hired</dt><dd>{TWer.hired}</dd>
                    <dt>Available Days</dt><dd>{TWer.availableDays}</dd>
                </dl>

                <h4>Leave History</h4>

                <table className="table table-sm table-striped">
                    <thead>
                        <tr>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Days</th>
                            <th>Type</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        TWer.leaves.map(function(row,i){
                            return (
                                <tr key={i}>
                                    <td>{ row.start }</td>
                                    <td>{ row.end }</td>
                                    <td>{ row.days }</td>
                                    <td>{ row.type }</td>
                                </tr>
                            );
                        })
                    }
                    </tbody>
                </table>
            </div>

        );
    }
}