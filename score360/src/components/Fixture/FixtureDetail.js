import React, { Component } from "react";
import FixtureNavbar from "./FixtureNavbar";
import FixtureSummary from "./FixtureSummary";
import FixtureScorecard from "./FixtureScorecard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class FixtureDetail extends Component {
  // componentDidMount() {
  //   const { id } = this.props.match.params;
  // }
  render() {
    return (
      <div>
        <Router>
          <FixtureNavbar />
          <FixtureSummary />
          <switch>
            {/* <Route
              exact
              path="/fixture/fixturesummary"
              component={FixtureSummary}
            /> */}

            <Route
              exact
              path="/fixture/fixturescorecard"
              component={FixtureScorecard}
            />
          </switch>
        </Router>
      </div>
    );
  }
}
export default FixtureDetail;
