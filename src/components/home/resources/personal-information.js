import React from 'react';
import { Alert } from 'react-bootstrap';

const PersonalInformation = ({person, error}) =>{

  if(error){
    return(
		      <Alert bsStyle="danger">
		      Hubo un error al consultar su información
		      </Alert>);
  }

  if(!person){
   return(
		   <Alert bsStyle="info">
		   Recuperando información
		   </Alert>);
  }

  return(
    <div>
    <h2 className="home-personal-information">Tu Información</h2>
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


};



export default PersonalInformation;
