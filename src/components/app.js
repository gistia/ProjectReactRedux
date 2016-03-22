import React from 'react';
import { Component } from 'react';

import Header from './header';
import PageTitle from '../containers/page_title';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <PageTitle title="Projects" />

        <div className="page-content">
          {this.props.children}
        </div>
      </div>
    );
  }
}
