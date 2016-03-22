import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchTasks } from '../actions/index';

class Milestone extends Component {
  constructor(props) {
    super(props);
    this.state = {showTasks: false};
    console.log(this.state);
  }

  onMilestoneClicked() {
    const { milestone } = this.props;

    if (!this.state.showTasks) {
      this.props.fetchTasks(milestone.id);
    }

    this.setState({showTasks: !this.state.showTasks});
  }

  renderTask(task) {
    return (
      <tr className="task">
        <td>
          <a>#{task.id}</a>
        </td>
        <td>
          {task.name}
        </td>
        <td>
          {task.status}
        </td>
        <td>
          {task.points}
        </td>
        <td>
          {task.user ? task.user.name : ''}
        </td>
        <td></td>
      </tr>
    )
  }

  renderTasks() {
    const { tasks } = this.props.milestone;

    if (!this.state.showTasks || !tasks) {
      return <span></span>;
    }

    return (
      <div className="tasks">
        <table className="table task-table">
          <thead>
            <tr>
              <th>#ID</th>
              <th>Name</th>
              <th>Status</th>
              <th>Points</th>
              <th>Assignee</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {tasks.map(t => this.renderTask(t))}
          </tbody>
        </table>
      </div>
    );
  }

  render() {
    const { milestone } = this.props;

    if (!milestone) {
      return <div></div>;
    }

    return (
      <article className="milestone">
        <div>
          <span className="expander column small-column">
            <a onClick={this.onMilestoneClicked.bind(this)}>
              {this.state.showTasks ? null : <i className="fa fa-caret-right"></i>}
              {this.state.showTasks ? <i className="fa fa-caret-down"></i> : null}
            </a>
          </span>

          <span className="column large-column">
            {milestone.name}
          </span>

          {this.renderTasks()}
        </div>
      </article>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchTasks }, dispatch);
}

export default connect(null, mapDispatchToProps)(Milestone);
