import React, {Component} from 'react';

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
      peopleService.get(15576).then(person =>
        this.setState({person: person})
      );
    }

    render() {
        let person = this.state.person;
        if (person) {
            return (
                <div>
                    <h2 className="home-person-information">Tu Información</h2>
                    <div className="row">
                        <div className="col-lg-2">
                            <img src={person.picture.url} alt="foto personal"/>
                        </div>
                        <div className="col-lg-10">
                            <dl className="dl-horizontal">
                                <dt>Nombre</dt>
                                <dd>{person.preferredName}</dd>
                                <dt>Correo Electrónico</dt>
                                <dd>{ person.loginName }@thoughtworks.com</dd>
                                <dt>Oficina base</dt>
                                <dd>{person.homeOffice.name}</dd>
                                <dt>Oficina actual</dt>
                                <dd>{person.workingOffice.name}</dd>
                                <dt>Fecha de contratación</dt>
                                <dd>{person.hireDate}</dd>
                                <dt>Días disponibles</dt>
                                <dd></dd>
                            </dl>
                        </div>
                    </div>
                </div>
            );
        }
        return (<div></div>);
    }
}
