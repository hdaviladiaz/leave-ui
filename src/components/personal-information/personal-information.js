import React from 'react';
import { Alert } from 'react-bootstrap';
import './personal-information.css';

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
    <div className="personal-container col-lg-12">
      <div className="col-lg-3 no-padding">
        <img src={person.picture.url} alt="foto personal" className="img-picture"/>
      </div>
      <div className="col-lg-9">
        <p>{person.preferredName}</p>
        <p>TWer from {person.hireDate}</p>
      </div>
    </div>
  );
};

export default PersonalInformation;
