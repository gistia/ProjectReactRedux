import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import Milestone from '../components/milestone';
import { fetchProject } from '../actions/index';
import { fetchMilestones } from '../actions/index';

class ProjectsShow extends Component {
  // this injects the router into the React context,
  // making it available as a component prop
  static contextTypes = { router: PropTypes.object };

  componentWillMount() {
    this.props.fetchProject(this.props.params.id);
    this.props.fetchMilestones(this.props.params.id);
  }

  renderMilestones() {
    const { project: { milestones } } = this.props;

    return milestones.map((milestone) => {
      return <Milestone key={milestone.id} milestone={milestone} />;
    });
  }

  render() {
    const { project, milestones } = this.props;

    if (!project || !milestones) {
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
    project: state.projects.project,
    milestones: state.projects.milestones
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchProject, fetchMilestones }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsShow);
