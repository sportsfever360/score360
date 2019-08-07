import React, { Component } from "react";
import FixtureNavbar from "./FixtureNavbar";
import MatchResult from "./FixtureResult";
import FixtureTable from "./FixtureTable";

class FixtureDetail extends Component {
  render() {
    return (
      <div>
        <FixtureNavbar />
        <div className="fixture-1">
          <MatchResult />
          <FixtureTable />
        </div>
      </div>
    );
  }
}
export default FixtureDetail;
