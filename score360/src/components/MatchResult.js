import React, { Component } from "react";
import "../App.css";
import team1 from "../logo/team1.jpg";
import team2 from "../logo/team2.jpg";
import axios from "axios";

class MatchResult extends Component {
  state = {
    matches: [],
    loading: false
  };
  componentDidMount() {
    var headers = {
      ApiKey: "6s3C12rE47",
      consumerKey: "1S2c4R7e36_"
    };
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://sportapi.cricclubs.com/sport/liveScoreOverlay/liveScoreOverlayData?clubId=12047&matchId=6",
        { headers }
      )
      .then(res => {
        this.setState({
          matches: res.data.data,
          loading: true
        });
        console.log(res.data);
      });
  }
  render() {
    const { matches, loading } = this.state;

    return (
      <div>
        {loading ? (
          <div className="jumbotron jumbotron-fluid d-flex justify-content-center align-items-center bg-image text-white text-center">
            <div className="col-lg-12">
              <div className="schedule-logo text-center vsteam-image">
                <ul className="d-flex justify-content-center align-items-center">
                  <li>
                    <span className="teamName font-weight-bold p-3">
                      {matches.values.t1Name}
                      <br />
                    </span>
                    <span className="p-3">
                      {matches.values.t1Total}/{matches.values.t1Wickets}
                    </span>{" "}
                    <br />
                    <p className="p-3">{matches.values.t1Overs}/20 overs</p>
                  </li>
                  <li>
                    <a href="/score360/viewTeam.do?teamId=12&amp;clubId=12047">
                      <img
                        src={team1}
                        className="img-responsive "
                        style={{
                          width: 75,
                          height: 75,
                          borderRadius: 200 / 2,
                          padding: "10px"
                        }}
                      />
                    </a>
                  </li>
                  <li>
                    <a href="/score360/viewTeam.do?teamId=14&amp;clubId=12047">
                      <img
                        src={team2}
                        className="img-responsive  "
                        style={{
                          width: 75,
                          height: 75,
                          borderRadius: 200 / 2,
                          padding: "10px"
                        }}
                      />
                    </a>
                  </li>
                  <li className="win">
                    <span className="teamName font-weight-bold p-3">
                      {matches.values.t2Name}
                      <br />
                    </span>
                    <span className="p-3">
                      {matches.values.t2Total}/{matches.values.t2Wickets}
                    </span>{" "}
                    <br />
                    <p className="p-3">{matches.values.t2Overs}/20.0 overs</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div class="d-flex justify-content-center p-5">
            <div class="spinner-border" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default MatchResult;
