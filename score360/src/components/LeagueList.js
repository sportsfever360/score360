import React, { Component } from "react";
import axios from "axios";
import TeamCounter from "./TeamCounter";

class LeagueList extends Component {
  state = {
    leagues: []
  };

  componentDidMount() {
    var headers = {
      ApiKey: "6s3C12rE47",
      consumerKey: "1S2c4R7e36_"
    };
    axios
      .get(
        " https://cors-anywhere.herokuapp.com/https://sportapi.cricclubs.com/sport/league/cleague ",
        { headers }
      )
      .then(res => {
        this.setState({
          leagues: res.data.data
        });
        console.log(this.state.leagues);
      });
  }

  render() {
    const { leagues } = this.state;

    return (
      <div className="container-1">
        <div className="box-1">
          <h1 className="display-7">T 10's</h1>

          {leagues
            .filter(league => league.seriesType == "Ten10")
            .map((league, key) => (
              <div>
                <div className="card" key={league.leagueId}>
                  <div className="card-body">
                    <h5 className="card-title">{league.name}</h5>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      Since = {league.startDate}
                    </li>
                  </ul>
                  <div className="card-body">
                    <a href="#" className="card-link ">
                      No of Teams = {<TeamCounter />}
                    </a>
                    <a href="#" className="card-link">
                      Another link
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="box-2">
          <h1 className="display-7">T 20's</h1>

          {leagues
            .filter(league => league.seriesType == "Twenty20")
            .map((league, key) => (
              <div className="card" key={league.leagueId}>
                <div className="card-body">
                  <h5 className="card-title">{league.name}</h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    Since = {league.startDate}
                  </li>
                </ul>
                <div className="card-body">
                  <a href="#" className="card-link">
                    Card link
                  </a>
                  <a href="#" className="card-link">
                    Another link
                  </a>
                </div>
              </div>
            ))}
        </div>
        <div className="box-3">
          <h1 className="display-7">ODI's</h1>

          {leagues
            .filter(league => league.seriesType == "One Day")
            .map((league, key) => (
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{league.name}</h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    Since = {league.startDate}
                  </li>
                </ul>
                <div className="card-body">
                  <a href="#" className="card-link">
                    Card link
                  </a>
                  <a href="#" className="card-link">
                    Another link
                  </a>
                </div>
              </div>
            ))}
        </div>
        <div className="box-4">
          <h1 className="display-7">Test's</h1>

          {leagues
            .filter(league => league.seriesType == "Test")
            .map((league, key) => (
              <div className="card" key={league.leagueId}>
                <div className="card-body">
                  <h5 className="card-title">{league.name}</h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    Since = {league.startDate}
                  </li>
                </ul>
                <div className="card-body">
                  <a href="#" className="card-link">
                    Card link
                  </a>
                  <a href="#" className="card-link">
                    Another link
                  </a>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  }
}
export default LeagueList;

/* <div className="card" style={{ width: "18rem" }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Cras justo odio</li>
              <li className="list-group-item">Dapibus ac facilisis in</li>
              <li className="list-group-item">Vestibulum at eros</li>
            </ul>
            <div className="card-body">
              <a href="#" className="card-link">
                Card link
              </a>
              <a href="#" className="card-link">
                Another link
              </a>
            </div>
          </div>*/
