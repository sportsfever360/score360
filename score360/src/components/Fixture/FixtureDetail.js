import React, { Component } from "react";
import FixtureNavbar from "./FixtureNavbar";
import FixtureSummary from "./FixtureSummary";
import FixtureCommentary from "./FixtureCommentary";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class FixtureDetail extends Component {
  state = {
    key: ""
  };
  componentDidMount() {
    const { id } = this.props.match.params;
    this.setState({
      key: id
    });
  }
  render() {
    const { key } = this.state;
    console.log(key);
    return (
      <div>
        <Router>
          <FixtureSummary />
          <FixtureCommentary />
        </Router>
      </div>
    );
  }
}
export default FixtureDetail;
