import React, { Component } from 'react'

export default class Widget extends Component {


  render() {
    return (
      <section className={`widget widget-card text-white ${this.props.bgClass}`}>
        <div className="widget-body clearfix">
          <div className="row">
            <div className="col-xs-3">
              <span className="widget-icon">
                <i className={this.props.icon}></i>
              </span>
            </div>
            <div className="col-xs-9 text-center">
              <h5 className="no-margin">{this.props.title}</h5>
              <p className="fw-big">{this.props.value}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
