import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import PropTypes from 'prop-types';

import Footer from '../footer/footer.js'
import PersonalInformation from '../personal-information/personal-information.js'
import PeopleService from '../../services/peopleService';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: null,
      eror: null
    };
  }

  componentDidMount() {
    PeopleService.getInstance().getLoggedUserInformation().then(person => this.setState({person: person})).catch(error => {
      this.setState({error: error})
    });
  }

  checkActive(href) {
    var isActive = this.context.router.route.location.pathname === href;
    return isActive ? 'disabled' : '';
  }

  render() {
    return (
      <div>
        <div className="col-lg-12 text-center p-md">
          <div>
            LOGO
          </div>
          <div>
            VACAS
          </div>
        </div>
        <PersonalInformation person={this.state.person} error={this.state.error}/>
        <div className="col-lg-12">
          <Button block href="/" className={this.checkActive("/")}>Mis Vacaciones</Button>
          <Button block>Cerrar Sesión</Button>
        </div>
        <Footer />
      </div>
    );
  }
}

Sidebar.contextTypes = {
  router: PropTypes.object
};

export default Sidebar;
