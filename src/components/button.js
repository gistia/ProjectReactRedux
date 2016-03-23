import React, { Component } from 'react';

export default class Button extends Component {
  render() {
    const classes = ['btn', 'btn-xs', `btn-${this.props.type}`].join(' ');

    return (
      <button className={classes} onClick={this.props.onClick}>
        {this.props.label}
      </button>
    );
  }
}
