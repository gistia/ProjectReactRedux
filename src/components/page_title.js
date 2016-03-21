import React, { Component } from 'react';

export default class PageTitle extends Component {
  render() {
    return (
      <div className="page-head projects-page">
        <div className="page-content-wrapper">
          <div className="container-fluid">
            <div className="page-title">
              <h1>{this.props.title}</h1>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
