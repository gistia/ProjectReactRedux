import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Milestone from './project/milestone';
import { setTitle } from '../actions/index';
import { fetchProject } from '../actions/index';

class ProjectsShow extends Component {
  componentWillMount() {
    this.props.fetchProject(this.props.params.id);
  }

  componentDidUpdate() {
    this.props.setTitle(this.props.project.name);
  }

  renderMilestones() {
    const { project } = this.props;
    const { milestones } = project;

    return milestones.map((milestone) => {
      return <Milestone
               key={milestone.id}
               project={project}
               milestone={milestone} />;
    });
  }

  render() {
    const { project } = this.props;

    if (!project) {
      return <div>Loading...</div>;
    }

    return (
      <div className="container-fluid">
        <div className="tabbable-line">
          <ul className="nav nav-tabs">
            <li role="presentation" className="active">
              <a ui-sref="projects.show({id: ctrl.project.id})" href="/projects/17">Milestones</a>
            </li>
            <li role="presentation">
              <a ui-sref="projects.settings({projectId: ctrl.project.id})" href="/projects/17/settings">Settings</a>
            </li>
          </ul>

          <div className="tab-content">
            <div className="portlet light">
              <div className="portlet-title">
                <div className="caption">
                  <span className="caption-subject font-green-sharp bold uppercase">Milestones and Tasks</span>
                </div>

                <div className="actions">
                  <button type="button" className="btn btn-circle btn-default" ng-click="ctrl.addMilestone()">
                    <i className="fa fa-plus"></i> Milestone
                  </button>
                  <button type="button" className="btn btn-circle btn-danger" ng-click="ctrl.addNextMilestone()">
                    <i className="fa fa-plus"></i> Next Sprint
                  </button>
                </div>
              </div>

              <div className="portlet-body">
                <div className="panel panel-default">
                  <section className="table milestone-table">
                    <article className="header">
                      <b className="column small-column invisible"><i className="fa fa-caret-right"></i></b>
                      <b className="column large-column">Name</b>
                      <b className="column medium-column">Start Date</b>
                      <b className="column medium-column">End Date</b>
                      <b className="column medium-column">Budget</b>
                      <b className="column medium-column">Consumption</b>
                      <b className="column small-column invisible">
                        <i className="fa fa-star-o activate-milestone"></i>
                      </b>
                      <b className="column small-column invisible">
                          <a className="btn btn-circle small btn-icon-only"><i className="fa fa-file-text-o"></i></a>
                          <a className="btn btn-circle small btn-icon-only"><i className="bts bt-plus"></i></a>
                          <a className="btn btn-circle small btn-icon-only"><i className="fa fa-arrows"></i></a>
                          <a className="btn btn-circle small btn-icon-only"><i className="bts bt-trash"></i></a>
                      </b>
                    </article>

                    <section className="milestones">
                      {this.renderMilestones()}
                    </section>
                  </section>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    project: state.projects.project
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setTitle, fetchProject }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsShow);
