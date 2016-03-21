import React, { Component } from 'react';

export default class Milestone extends Component {
  render() {
    const { milestone } = this.props;

    if (!milestone) {
      return <div></div>;
    }

    return (
      <article className="milestone">
        <div>
          <span className="expander column small-column">
            <a href="" ng-click="ctrl.expandMilestone(milestone)">
              {/* <i className="fa fa-caret-right"></i> */}
            </a>
          </span>

          <span className="column large-column">
            {milestone.name}
          </span>
        </div>
      </article>
    );
  }
}
