import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  ToastContainer,
  ToastMessage,
} from "react-toastr";

const ToastMessageFactory = React.createFactory(ToastMessage.animation);

class Notifications extends Component {
  componentDidUpdate() {
    const { error } = this.props;
    if (error) {
      this.refs.container.error(error, null, { closeButton: false });
    }
  }

  render() {
    return (
      <ToastContainer ref="container"
                      toastMessageFactory={ToastMessageFactory}
                      className="toast-top-right" />
    );
  }
}

function mapStateToProps(state) {
  return {
    error: state.page.error
  };
}

export default connect(mapStateToProps)(Notifications);
