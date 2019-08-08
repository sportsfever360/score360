import React, { Component } from "react";
import MatchResult from "./FixtureResult";
import FixtureTable from "./FixtureTable";

class FixtureSummary extends Component {
  render() {
    return (
      <div className="fixture-1">
        <MatchResult />
        <FixtureTable />
      </div>
    );
  }
}
export default FixtureSummary;
