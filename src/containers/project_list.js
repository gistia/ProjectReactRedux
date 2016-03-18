import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProjects } from '../actions/index';
import { bindActionCreators } from 'redux';

class ProjectList extends Component {
  constructor(props) {
    super(props);
    this.props.fetchProjects();
  }

  renderList() {
    console.log(this.props);
    if (!this.props.projects) {
      return null;
    }

    return this.props.projects.map((project) => {
      return (
        <li key={project.id}>{project.name}</li>
      );
    })
  }

  render() {
    return (
      <ul>
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    projects: state.projects
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchProjects }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);
