import React, { Component } from 'react';

export default class Auth extends Component {
    constructor(props) {
        super(props);
        localStorage.token = this.props.match.params.token;
        localStorage.rol = this.props.match.params.token[this.props.match.params.token.length-1];
    }
    componentDidMount(){
       this.props.history.push('/')
    }
    render() {
        return (<div>
          AUTENTICANDO
        </div>);
    }
}
