import React, { Component } from "react";
import axios from "axios";
class FixtureCommentary extends Component {
  state = {
    commentary: []
  };
  componentDidMount() {
    const fixtureid = window.location.pathname;
    const array = fixtureid.split("/");
    const id = array[2];

    var headers = {
      ApiKey: "6s3C12rE47",
      consumerKey: "1S2c4R7e36_"
    };
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://sportapi.cricclubs.com/sport/ball/info?matchId=${id}&clubId=12047`,
        { headers }
      )
      .then(res => {
        this.setState({
          commentary: res.data.data.team1Balls
        });
      });
  }
  render() {
    const { commentary } = this.state;
    console.log(commentary);
    return (
      <div>
        {commentary.map(commentary => (
          <div class="card mb-3" style={{ maxWidth: "540px" }}>
            <div class="row no-gutters">
              <div class="col-md-4">
                <h2 class="card-title">Ball: {commentary.ball}</h2>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <p class="card-text">{commentary.commentary}</p>
                  <p class="card-text">
                    <small class="text-muted">Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default FixtureCommentary;
