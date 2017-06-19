import React, {Component} from 'react';

import PeopleService from '../../services/PeopleService';
import './home.css';
import PersonalInformation from '../personal-information/personal-information.js'

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            people: null
        };
    }

    componentDidMount() {
      PeopleService.getInstance().getLoggedUserInformation().then(person =>
        this.setState({person: person})
      ).catch(error => {
          this.setState({error: error})
      });
    }

    render() {
            return (
                <div>
                  <PersonalInformation person={this.state.person} error={this.state.error} />
                </div>
            );
      }
}
