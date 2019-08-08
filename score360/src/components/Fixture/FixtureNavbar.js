import React, { Component } from "react";
import { Link } from "react-router-dom";

class FixtureNavbar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-md navbar-custom">
          <div class="navbar-collapse collapse pt-2 pt-md-0" id="navbar2">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <Link to="/fixture/fixturesummary" class="nav-link" href="#">
                  Summary
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/fixture/fixturescorecard" class="nav-link" href="#">
                  Scoreboard
                </Link>
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
