import React, { Component } from "react";
import axios from "axios";

class MatchResult extends Component {
  state = {
    result: []
  };

  componentDidMount() {
    var headers = {
      ApiKey: "6s3C12rE47",
      consumerKey: "1S2c4R7e36_"
    };
    axios
      .get(
        " https://cors-anywhere.herokuapp.com/http://sportapi.cricclubs.com/sport/liveScoreOverlay/liveScoreOverlayData?clubId=12047&matchId=5 ",
        { headers }
      )
      .then(res => {
        this.setState({
          result: res.data.data
        });
      });
  }

  render() {
    const { result } = this.state;
    return (
      <div class="card" style={{ width: "30rem", height: "14rem" }}>
        <div class="card-body">
          <h5 class="card-title">Match Result</h5>
          <h6 class="card-subtitle mb-2 text-muted">Details go here</h6>
          <p class="card-text">
            <ul>
              <li>
                <span className="teamName font-weight-bold p-3">
                  {result.values.t1Name} :
                </span>

                <span className="p-3">
                  {result.values.t1Total}/{result.values.t1Wickets}
                </span>
                <span
                  className="overs"
                  style={{ color: "#9ea1a3", fontSize: "14px" }}
                >
                  ({result.values.totalOvers}Ov)
                </span>
                <br />
              </li>
              <li>
                <span className="teamName font-weight-bold p-3">
                  {result.values.t2Name} :
                </span>

                <span className="p-3">
                  {result.values.t2Total}/{result.values.t2Wickets}
                </span>
                <span
                  className="overs"
                  style={{ color: "#9ea1a3", fontSize: "14px" }}
                >
                  ({result.values.totalOvers}Ov)
                </span>
                <br />
              </li>
            </ul>
          </p>
        </div>
      </div>
    );
  }
}
export default MatchResult;
