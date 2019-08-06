import React, { Component } from "react";

class FixtureNavbar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-md navbar-custom">
          <div class="navbar-collapse collapse pt-2 pt-md-0" id="navbar2">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Summary
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Scoreboard
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Commentary
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
export default FixtureNavbar;
