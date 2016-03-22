import React, { Component } from 'react';

export default class Task extends Component {
  render() {
    const { task } = this.props;

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
          {task.user ? task.user.name : ''}
        </td>
        <td></td>
      </tr>
    );
  }
}
