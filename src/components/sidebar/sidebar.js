import React, {Component} from 'react';

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
  }

  componentDidMount() {
    PeopleService.getInstance().getLoggedUserInformation().then(person => this.setState({person: person})).catch(error => {
      this.setState({error: error})
    });
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
        <Navigation />
        <Footer />
      </div>
    );
  }
}
