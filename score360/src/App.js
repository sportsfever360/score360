import Header from "./Layout/Header";
import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "./Layout/Slider";
import Responsive from "./Layout/Slider_test";
import MatchResult from "./components/MatchResult";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SliderComponent from "./Layout/SliderComponent";
import { Provider } from "./Context";
import LeagueList from "./components/LeagueList";
import Fixtures from "./components/Fixtures";
import TeamCounter from "./components/TeamCounter";
import FixtureDetail from "./components/Fixture/FixtureDetail";
import Footer from "./Layout/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Provider>
          <Router>
            <Responsive />
            <Header />

            <Switch>
              <Route
                exact
                path="/fixturedetail/:id"
                component={FixtureDetail}
              />
              <Route exact path="/fixture/:id" component={Fixtures} />

              <Route exact path="/matchresult" component={MatchResult} />

              <Route exact path="/" component={LeagueList} />
            </Switch>
          </Router>
        </Provider>
        <Footer />
      </div>
    );
  }
}

export default App;
