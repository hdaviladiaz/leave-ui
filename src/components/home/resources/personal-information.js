import React from 'react';

const PersonalInformation = ({person, error}) =>{

  if(error){
    return(<div>There has been an error retrieving your information </div>);
  }

  if(!person){
   return(<div>Loading ...</div>);
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
