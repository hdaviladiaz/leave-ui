import React, {Component} from 'react';

import PeopleService from '../../services/PeopleService';
import './home.css';
import PersonalInformation from './resources/personal-information.js'

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
            return (
                <div>
                  <PersonalInformation person={this.state.person} />
                </div>
            );
      }
}
