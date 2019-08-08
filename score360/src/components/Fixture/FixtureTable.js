import React, { Component } from "react";
import axios from "axios";

class FixtureTable extends Component {
  state = {
    result: [],
    result2: []
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
          result: res.data.data.values.t1Batting,
          result2: res.data.data.values.t2Batting
        });
      });
  }
  render() {
    const { result, result2 } = this.state;
    console.log(result2);

    return (
      <div
        className="fixtureTable"
        style={{
          width: "40rem",
          paddingTop: "10px",
          paddingLeft: "40px"
        }}
      >
        <h1 style={{ fontSize: "20px" }}>Batsman Performances </h1>
        <table class="table table-hover">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">R</th>
              <th scope="col">B</th>
              <th scope="col">4s</th>
              <th scope="col">6s</th>
            </tr>
          </thead>
          {result.map(result => (
            <tbody>
              <tr>
                <td>{result.firstName}</td>
                <td>{result.runsScored}</td>
                <td>{result.ballsFaced}</td>
                <td>{result.fours}</td>
                <td>{result.sixers}</td>
              </tr>
            </tbody>
          ))}
        </table>

        <table class="table table-hover">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">R</th>
              <th scope="col">B</th>
              <th scope="col">4s</th>
              <th scope="col">6s</th>
            </tr>
          </thead>
          {result2.map(result2 => (
            <tbody>
              <tr>
                <td>{result2.firstName}</td>
                <td>{result2.runsScored}</td>
                <td>{result2.ballsFaced}</td>
                <td>{result2.fours}</td>
                <td>{result2.sixers}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    );
  }
}
export default FixtureTable;
