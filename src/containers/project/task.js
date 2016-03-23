import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { updateTask } from '../../actions/index';

class Task extends Component {
  constructor(props) {
    super(props);
    this.onUserChanged = this.onUserChanged.bind(this);
  }

  renderUserOptions() {
    const { task, project } = this.props;

    return project.members.map((member) => {
      return <option
                key={member.id}
                value={member.user_id}>
                {member.name}
             </option>;
    });
  }

  onUserChanged(event) {
    const task = { ...this.props.task, user_id: event.target.value };
    this.props.updateTask(task);
  }

  render() {
    const { task } = this.props;
    const userId = task.user ? task.user.id : null;

    return (
      <tr key={task.id} className="task">
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
          <select
            className="input form-control"
            onChange={this.onUserChanged}
            value={userId}>
            <option value=""></option>
            {this.renderUserOptions()}
          </select>
        </td>
        <td></td>
      </tr>
    );
  }
}

function mapStateToProps(state) {
  return {
    project: state.projects.project
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateTask }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Task);
