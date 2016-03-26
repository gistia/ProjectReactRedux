import React, { Component } from 'react';
import { connect } from 'react-redux';

class PageTitle extends Component {
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

function mapStateToProps(state) {
  return {
    title: state.page.title
  };
}

export default connect(mapStateToProps)(PageTitle);
