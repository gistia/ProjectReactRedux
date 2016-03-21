import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import ProjectsList from './containers/projects_list';
import ProjectsShow from './containers/projects_show';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={ProjectsList} />
    <Route path="projects/:id" component={ProjectsShow} />
  </Route>
);
