import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { setTitle } from '../actions/index';
import { fetchProjects } from '../actions/index';

class ProjectsList extends Component {
  componentWillMount() {
    this.props.setTitle('Projects');
    this.props.fetchProjects();
  }

  renderList() {
    const { projects } = this.props;

    if (!projects) {
      return <li>Loading...</li>;
    }

    return projects.map((project) => {
      return (
        <div
          key={project.id}
          className="project-item col-xs-4 col-lg-3 ng-scope"
          >
          <div className="widget-thumb widget-bg-color-white text-uppercase margin-bottom-20">
            <Link to={`/projects/${project.id}`}>
              <h4 className="project-name widget-thumb-heading">
                {project.name}
              </h4>
              <span className="label label-success">
                {project.status}
              </span>
              <div className="members">
              </div>
            </Link>
          </div>
        </div>
      );
    })
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row widget-row">
          {this.renderList()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    projects: state.projects.all
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setTitle, fetchProjects }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsList);
