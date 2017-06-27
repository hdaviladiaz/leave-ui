import React, { Component } from 'react';

export default class Auth extends Component {
    constructor(props) {
        super(props);
        localStorage.token = this.props.match.params.token;
        localStorage.rol = this.props.match.params.token[this.props.match.params.token.length-1];
    }
    componentDidMount(){
        var history = this.props.history;
        localStorage.rol === 0 ? history.push('/admin/dashboard/leaves') : history.push('/admin/dashboard/leaves');
    }
    render() {
        return (<div>
          AUTENTICANDO
        </div>);
    }
}
