import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header>
        <div>
          <div className="logo">
            <p>Start Bootstrap</p>
          </div>
          <nav className="nav">
            <ul>
              <li>
                <a href="#/services">Services</a>
              </li>
              <li>
                <a href="#/portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#/about">About</a>
              </li>
              <li>
                <a href="#/team">Team</a>
              </li>
              <li>
                <a href="#/contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}
