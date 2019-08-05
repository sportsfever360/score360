import React, { Component } from "react";
import "../App.css";
import team1 from "../logo/team1.jpg";
import team2 from "../logo/team2.jpg";
import axios from "axios";
import { Consumer } from "../Context";

class MatchResult extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { matches, loading } = value;
          console.log(matches);
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
                          <p className="p-3">
                            {matches.values.t1Overs}/{matches.values.totalOvers}{" "}
                            overs
                          </p>
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
                          <p className="p-3">
                            {matches.values.t2Overs}/{matches.values.totalOvers}{" "}
                            overs
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="d-flex justify-content-center p-5">
                  <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
              )}
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default MatchResult;
