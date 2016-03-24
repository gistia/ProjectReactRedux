import React from 'react';
import { Component } from 'react';

import Header from './header';
import Notifications from '../containers/page/notifications';
import PageTitle from '../containers/page/page_title';

export default class App extends Component {
  render() {
    return (
      <div>
        <Notifications />
        <Header />
        <PageTitle title="Projects" />

        <div className="page-content">
          {this.props.children}
        </div>
      </div>
    );
  }
}
