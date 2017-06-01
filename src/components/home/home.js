import React, {Component} from 'react';
import {Breadcrumb} from 'react-bootstrap';
import axios from 'axios';

//import PeopleService from '../../services/PeopleService';
import './home.css';

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            people: null
        };
    }

    componentDidMount() {
        axios.get('http://localhost:3000/people/20260').then(function (response) {
            this.setState({people: response.data[0]});
        }.bind(this));
    }

    render() {
        console.log('render');

        let TWer = this.state.people;

        console.log(TWer);

        if (TWer) {

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

                    <h4 className="home-twer-information">TWer Informations</h4>

                    <div className="row">
                        <div className="col-lg-2">
                            <img src={TWer.picture.url} alt="" />
                        </div>
                        <div className="col-lg-10">
                            <dl className="dl-horizontal">
                                <dt>Name</dt>
                                <dd>{TWer.preferredName}</dd>
                                <dt>E-mail</dt>
                                <dd>{ TWer.loginName }@thoughtworks.com</dd>
                                <dt>Gender</dt>
                                <dd>{TWer.gender}</dd>
                                <dt>Grade</dt>
                                <dd>{TWer.grade.name}</dd>
                                <dt>Role</dt>
                                <dd>{TWer.role.name}</dd>
                                <dt>Hired</dt>
                                <dd>{TWer.hireDate}</dd>
                                <dt>Available Days</dt>
                                <dd>0</dd>
                            </dl>

                        </div>
                    </div>

                </div>
            );
        }

        return (<div></div>);
    }
}