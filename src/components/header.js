import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Header extends Component {
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="page-header-top">
            <div className="container-fluid">
              <div className="page-logo">
                <h3 className="logo-default">Projekt</h3>
              </div>

              <a className="menu-toggler"></a>

              <div className="top-menu">
                <ul className="nav navbar-nav pull-right">
                  <li className="dropdown dropdown-user dropdown-dark">
                    <a href="javascript:;" className="dropdown-toggle" dropdown-menu-hover data-toggle="dropdown" data-close-others="true">
                        <img ng-src="" className="img-circle" />
                        <span className="username username-hide-mobile">
                          Felipe Coury
                        </span>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-default">
                      <li>
                        <a ui-sref="profiles.my_profile">
                          <i className="btr bt-user"></i> My Profile
                        </a>
                      </li>
                      <li className="divider"></li>
                      <li>
                        <a ng-click="ctrl.logout()">
                          <i className="btr bt-sign-out"></i> Log Out
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="page-header-menu" style={{display: 'block'}}>
            <div className="container-fluid">
              <div className="hor-menu">
                <ul className="nav navbar-nav">
                  <li className="active">
                    <Link to="/">Projects</Link>
                  </li>
                  <li className="">
                    <a ui-sref="time_entries.list">Time Entries</a>
                  </li>
                </ul>
              </div>

              <div className="search-form">

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
