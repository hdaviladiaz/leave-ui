import React, {Component} from 'react';

import PeopleService from '../../services/PeopleService';
import './home.css';
import EmployeeInformation from './resources/employee-information.js'

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            people: null
        };
    }

    componentDidMount() {
      let peopleService = new PeopleService();
      peopleService.get(15576).then(person =>
        this.setState({person: person})
      );
    }

    render() {
        let person = this.state.person;
        if (person) {
            return (
                <div>
                  <EmployeeInformation employee={this.state.person} />
                </div>
            );
        }
        return (<div></div>);
    }
}
