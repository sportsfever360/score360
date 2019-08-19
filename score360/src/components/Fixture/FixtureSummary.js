import React, { Component } from "react";
import MatchResult from "./FixtureResult";
import FixtureTable from "./FixtureTable";

class FixtureSummary extends Component {
  render() {
    const { id } = this.props;
    console.log(this.props);

    return (
      <div>
        <MatchResult id={id} />
        <FixtureTable id={id} />
      </div>
    );
  }
}
export default FixtureSummary;
