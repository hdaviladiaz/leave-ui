import React from 'react';

const EmployeeInformation = ({employee}) =>{

  if(!employee){
   return(<div />)
  }

  return(
    <div>
    <h2 className="home-employee-information">Tu Información</h2>
    <div className="row">
        <div className="col-lg-2">
            <img src={employee.picture.url} alt="foto employeeal"/>
        </div>
        <div className="col-lg-10">
            <dl className="dl-horizontal">
                <dt>Nombre</dt>
                <dd>{employee.preferredName}</dd>
                <dt>Correo Electrónico</dt>
                <dd>{ employee.loginName }@thoughtworks.com</dd>
                <dt>Oficina base</dt>
                <dd>{employee.homeOffice.name}</dd>
                <dt>Oficina actual</dt>
                <dd>{employee.workingOffice.name}</dd>
                <dt>Fecha de contratación</dt>
                <dd>{employee.hireDate}</dd>
                <dt>Días disponibles</dt>
                <dd></dd>
            </dl>
        </div>
    </div>
    </div>
  );


};



export default EmployeeInformation;
