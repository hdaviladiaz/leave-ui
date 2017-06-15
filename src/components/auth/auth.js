import React, { Component } from 'react';

export default class Auth extends Component {
    constructor(props) {
        super(props);
        localStorage.token = this.props.match.params.token;
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
