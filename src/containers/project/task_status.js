import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { updateTask } from '../../actions/index';
import Button from '../../components/button';

class TaskStatus extends Component {
  is(...status) {
    const { task } = this.props;
    return status.indexOf(task.status) > -1;
  }

  noStatus() {
    const { task } = this.props;
    return !task.status;
  }

  setStatus(status) {
    const { task } = this.props;
    this.props.updateTask({ ...task, status: status });
  }

  render() {
    const canStart = this.noStatus() || this.is('planned');
    const canRestart = this.is('rejected', 'paused');
    const canPause = this.is('started');
    const canFinish = this.is('started');
    const canDeliver = this.is('finished');
    const canReject = this.is('delivered');
    const canAccept = this.is('delivered');
    const isAccepted = this.is('accepted');

    return (
      <div className="status-button">
        {canStart   ? <Button onClick={() => this.setStatus("started")} type="default" label="Start" /> : null}
        {canFinish  ? <Button onClick={() => this.setStatus("finished")} type="primary" label="Finish"/> : null}
        {canPause   ? <Button onClick={() => this.setStatus("pauseed")} type="default" label="Pause" /> : null}
        {canDeliver ? <Button onClick={() => this.setStatus("delivered")} type="warning" label="Deliver" /> : null}
        {canAccept  ? <Button onClick={() => this.setStatus("accepted")} type="success" label="Accept" /> : null}
        {canReject  ? <Button onClick={() => this.setStatus("rejected")} type="danger" label="Reject" /> : null}
        {canRestart ? <Button onClick={() => this.setStatus("restarted")} type="default" label="Restart" /> : null}
        {isAccepted ? <Button type="success" label="Accepted" /> : null}
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateTask }, dispatch);
}

export default connect(null, mapDispatchToProps)(TaskStatus);
