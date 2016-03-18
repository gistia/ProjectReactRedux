import React from 'react';
import { Component } from 'react';

import ProjectList from '../containers/project_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <ProjectList />
      </div>
    );
  }
}
