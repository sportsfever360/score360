import React, { Component } from "react";
import axios from "axios";

class League extends Component {
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
      });
  }
  render() {
    const { league, id } = this.props.league;
    return (
      <div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{league.name}</h5>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Since = {league.startDate}</li>
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
      </div>
    );
  }
}
export default League;
