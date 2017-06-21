import React, { Component } from 'react';
import './sidebar.css';
import Footer from '../footer/footer.js';
import PersonalInformation from '../personal-information/personal-information.js';
import Navigation from '../navigation/navigation.js';
import PeopleService from '../../services/peopleService';

export default class Sidebar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      person: null,
      eror: null
    };
    this.peopleService = PeopleService.getInstance();
  }

  componentDidMount() {
    this.peopleService
      .getLoggedUserInformation()
      .then(person => this.setState({ person: person }))
      .catch(error => this.setState({ error: error }));
  }

  render() {
    return (
      <div className="display-inline">
        <div className="sidebar-content">
          <div className="col-lg-12 text-center p-md">
            <img alt="" src={'img/logo.png'} className="logo-Image" />
            <PersonalInformation person={this.state.person} error={this.state.error} />
            <Navigation isAdmin={this.peopleService.isAdmin()} />
          </div>
          <div className="push col-lg-12"></div>
        </div>
        <Footer />
      </div>
    );
  }
}
