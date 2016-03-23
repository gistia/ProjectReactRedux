import React, { Component } from 'react';

import Task from './task';

export default class TaskList extends Component {
  renderTasks() {
    const { tasks, project } = this.props;

    if (!tasks) {
      return null;
    }

    return tasks
      .map(task => <Task key={task.id} project={project} task={task} />);
  }

  render() {
    const { tasks } = this.props;

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
            {tasks ? this.renderTasks() : null}
          </tbody>
        </table>
      </div>
    );
  }
}
