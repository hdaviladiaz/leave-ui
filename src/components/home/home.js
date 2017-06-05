import React, {Component} from 'react';
import {Breadcrumb} from 'react-bootstrap';

import PeopleService from '../../services/PeopleService';
import './home.css';

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            people: null
        };
    }

    componentDidMount() {
      let peopleService = new PeopleService();
      console.log(peopleService);
      let pepe = peopleService.get(20260);
      console.log(pepe);
      // pepe.then(person =>
      //   this.setState({person: person})
      // );
    }

    render() {
        let person = this.state.person;
        if (person) {
            return (
                <div>
                    <h2 className="home-person-information">Your Information</h2>
                    <div className="row">
                        <div className="col-lg-2">
                            <img src={person.picture.url} />
                        </div>
                        <div className="col-lg-10">
                            <dl className="dl-horizontal">
                                <dt>Name</dt>
                                <dd>{person.preferredName}</dd>
                                <dt>E-mail</dt>
                                <dd>{ person.loginName }@thoughtworks.com</dd>
                                <dt>Gender</dt>
                                <dd>{person.gender}</dd>
                                <dt>Grade</dt>
                                <dd>{person.grade.name}</dd>
                                <dt>Role</dt>
                                <dd>{person.role.name}</dd>
                                <dt>Hired</dt>
                                <dd>{person.hireDate}</dd>
                                <dt>Available Days</dt>
                                <dd>15</dd>
                            </dl>
                        </div>
                    </div>
                </div>
            );
        }
        return (<div></div>);
    }
}
