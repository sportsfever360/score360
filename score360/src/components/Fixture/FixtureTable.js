import React, { Component } from "react";
import axios from "axios";

class FixtureTable extends Component {
  state = {
    t1batting: [],
    t2batting: [],
    t1bowling: [],
    t2bowling: [],
    showDetail: true
  };
  showTable = () => {
    this.setState({
      showDetail: !this.state.showDetail
    });
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
        `https://cors-anywhere.herokuapp.com/http://sportapi.cricclubs.com/sport/liveScoreOverlay/getScorecard?clubId=12047&matchId=${id}`,
        { headers }
      )
      .then(res => {
        this.setState({
          t1batting: res.data.data.team1Batting,
          t2batting: res.data.data.team2Batting,
          t1bowling: res.data.data.team1Bowling,
          t2bowling: res.data.data.team2Bowling
        });
      });
  }
  render() {
    const {
      t1batting,
      t2batting,
      t1bowling,
      t2bowling,
      showDetail
    } = this.state;

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
        <table class="table table-hover table-sm">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Batsman</th>
              <th scope="col">R</th>
              <th scope="col">B</th>
              <th scope="col">4s</th>
              <th scope="col">6s</th>
            </tr>
          </thead>

          {t1batting.map(result => (
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
        <table class="table table-hover table-sm">
          <thead class="thead-light">
            <tr>
              <th scope="col">Bowlers</th>
              <th scope="col">B</th>
              <th scope="col">R</th>
              <th scope="col">M</th>
              <th scope="col">Wd</th>
            </tr>
          </thead>
          {t1bowling.map(result => (
            <tbody>
              <tr>
                <td>{result.firstName}</td>
                <td>{result.balls}</td>
                <td>{result.runs}</td>
                <td>{result.maidens}</td>
                <td>{result.wides}</td>
              </tr>
            </tbody>
          ))}
        </table>

        <table class="table table-hover table-sm">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Batsman</th>
              <th scope="col">R</th>
              <th scope="col">B</th>
              <th scope="col">4s</th>
              <th scope="col">6s</th>
            </tr>
          </thead>
          {t2batting.map(result2 => (
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
        <table class="table table-hover table-sm">
          <thead class="thead-light">
            <tr>
              <th scope="col">Bowlers</th>
              <th scope="col">B</th>
              <th scope="col">R</th>
              <th scope="col">M</th>
              <th scope="col">Wd</th>
            </tr>
          </thead>
          {t2bowling.map(result => (
            <tbody>
              <tr>
                <td>{result.firstName}</td>
                <td>{result.balls}</td>
                <td>{result.runs}</td>
                <td>{result.maidens}</td>
                <td>{result.wides}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    );
  }
}
export default FixtureTable;
