import React, { Component } from "react";
import axios from "axios";

class FixtureTable extends Component {
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
          result: res.data.data.values.t1Batting
        });
      });
  }
  render() {
    const { result } = this.state;

    return (
      <div
        className="fixtureTable"
        style={{
          width: "40rem",
          paddingTop: "10px",
          paddingLeft: "40px"
        }}
      >
        <h1 style={{ fontSize: "20px" }}>Best Performances </h1>
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Run Scored</th>
              <th scope="col">Balls Faced</th>
            </tr>
          </thead>
          {result.map(result => (
            <tbody>
              <tr>
                <th scope="row">1</th>

                <td>{result.firstName}</td>
                <td>{result.runsScored}</td>
                <td>{result.ballsFaced}</td>
              </tr>
            </tbody>
          ))}
        </table>

        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
export default FixtureTable;
