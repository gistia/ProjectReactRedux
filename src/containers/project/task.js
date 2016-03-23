import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { updateTask } from '../../actions/index';
import InlineEdit from '../../components/inline_edit';
import TaskStatus from './task_status';

class Task extends Component {
  constructor(props) {
    super(props);
    this.onUserChanged = this.onUserChanged.bind(this);
    this.onTaskNameChange = this.onTaskNameChange.bind(this);
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

  onTaskNameChange(event) {
    const { task } = this.props;
    const { value } = event.target;

    this.props.updateTask({ ...task, name: value });
  }

  render() {
    const { task } = this.props;

    return (
      <tr key={task.id} className="task">
        <td>
          <a>#{task.id}</a>
        </td>
        <td>
          <InlineEdit value={task.name} onChange={this.onTaskNameChange} />
        </td>
        <td className="small-column">
          <TaskStatus task={task} />
        </td>
        <td className="small-column">
          {task.points}
        </td>
        <td className="small-column">
          <select
            className="input form-control"
            onChange={this.onUserChanged}
            value={task.user_id}>
            <option value=''></option>
            {this.renderUserOptions()}
          </select>
        </td>
        <td className="action"></td>
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
