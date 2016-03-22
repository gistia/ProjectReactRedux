import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import TaskList from './task_list';
import { fetchTasks } from '../../actions/index';

class Milestone extends Component {
  constructor(props) {
    super(props);
    this.state = {showTasks: false};
  }

  onMilestoneClicked() {
    const { milestone } = this.props;

    if (!this.state.showTasks) {
      this.props.fetchTasks(milestone.id);
    }

    this.setState({showTasks: !this.state.showTasks});
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

          {this.state.showTasks ? <TaskList tasks={milestone.tasks} /> : null}
        </div>
      </article>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchTasks }, dispatch);
}

export default connect(null, mapDispatchToProps)(Milestone);
