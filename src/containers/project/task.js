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
    this.onTaskChange = this.onTaskChange.bind(this);
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

  onTaskChange(attribute) {
    const { task } = this.props;

    return (event) => {
      const { value } = event.target;
      const newKey = {};
      newKey[attribute] = value;

      this.props.updateTask(Object.assign({}, task, newKey));
    }
  }

  render() {
    const { task } = this.props;
    let userId = task.user_id || '';

    return (
      <tr key={task.id} className="task">
        <td>
          <a>#{task.id}</a>
        </td>
        <td>
          <InlineEdit value={task.name} onChange={this.onTaskChange('name')} />
        </td>
        <td className="small-column">
          <TaskStatus task={task} />
        </td>
        <td className="small-column">
          <InlineEdit
            value={task.points}
            numeric={true}
            format="0"
            suffix="points"
            onChange={this.onTaskChange('points')} />
        </td>
        <td className="small-column">
          <select
            className="input form-control"
            onChange={this.onUserChanged}
            value={userId}>
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
