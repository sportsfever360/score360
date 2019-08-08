import React, { Component } from "react";
import axios from "axios";
import cwc from "../logo/cwc_icon.png";
import { Link } from "react-router-dom";
class Fixtures extends Component {
  state = {
    fixture: [],
    loading: false
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    var headers = {
      ApiKey: "6s3C12rE47",
      consumerKey: "1S2c4R7e36_"
    };
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://sportapi.cricclubs.com/sport/schedule/1?clubId=12047&league=${id}`,
        { headers }
      )
      .then(res => {
        this.setState({
          fixture: res.data.data
        });
        console.log(res.data);
      });
  }
  render() {
    const { loading, fixture } = this.state;
    console.log(fixture.teamOneName);
    return (
      <React.Fragment>
        {fixture.map(fixture => (
          <Link to="fixturedetail">
            <div class="score_header">
              <div class=" match_single">
                <div class="live_match">
                  <div class="series_icon">
                    <img class="icon" src={cwc} alt="" />
                  </div>

                  <div class=" live_match_details">
                    <p class="series_name">ICC CWC 2019</p>
                    <div class="match_details">
                      <div class="teams">
                        <p class="team_name">{fixture.teamOneName}</p>

                        <p class="team_name">{fixture.teamTwoName}</p>
                      </div>
                      <div class="scores">
                        <p class="team_score">122/9</p>
                        <p class="team_score">122/9</p>
                      </div>
                    </div>
                    <div class="match_result">
                      <p>{fixture.leagueName}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </React.Fragment>
    );
  }
}
export default Fixtures;
