import Header from "./Layout/Header";
import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "./Layout/Slider";
import MatchResult from "./components/MatchResult";

class App extends Component {
  render() {
    return (
      <div>
        <Header />

        <MatchResult />
      </div>
    );
  }
}

export default App;
