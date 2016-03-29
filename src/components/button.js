import React, { Component } from 'react';

export default class Button extends Component {
  render() {
    const classNames = ['btn', 'btn-xs', `btn-${this.props.type}`];

    if (this.props.className) {
      classNames.push(this.props.className);
    }

    const classes = classNames.join(' ');

    return (
      <button className={classes} onClick={this.props.onClick}>
        {this.props.label}
      </button>
    );
  }
}
