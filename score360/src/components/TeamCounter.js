import React, { Component } from "react";
import axios from "axios";

export default class TeamCounter extends Component {
  state = {
    Teams: []
  };

  componentDidMount() {
    var headers = {
      ApiKey: "6s3C12rE47",
      consumerKey: "1S2c4R7e36_"
    };
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/http://sportapi.cricclubs.com/sport/team/teams?clubId=12047 ",
        { headers }
      )
      .then(res => {
        this.setState({
          Teams: res.data.data
        });
        console.log(res.data);
      });
  }
  render() {
    const { Teams } = this.state;
    const length = Teams.filter(Teams => Teams.league == "8").length;

    return <div>{length}</div>;
  }
}
