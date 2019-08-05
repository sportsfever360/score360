import React, { Component } from "react";
import cwc from "../logo/cwc_icon.png";
import ashes from "../logo/ashes_icon.png";
import intl from "../logo/intl_icon.png";
import domain from "../logo/domain_icon.png";
import { Consumer } from "../Context";

class SliderComponent extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const {
            t1Name,
            t2Name,
            t1Wickets,
            t2Wickets,
            result,
            t1Total,
            t2Total
          } = this.props.matches;
          return (
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
                        <p class="team_name">{t1Name}</p>
                        <p class="team_name">{t2Name}</p>
                      </div>
                      <div class="scores">
                        <p class="team_score">
                          {t1Total}/{t1Wickets}
                        </p>
                        <p class="team_score">
                          {t2Total}/{t2Wickets}
                        </p>
                      </div>
                    </div>
                    <div class="match_result">
                      <p>{result}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default SliderComponent;

/* <div class="col-lg-3 match_single">
          <div class="live_match">
            <div class="series_icon">
              <img class="icon" src={ashes} alt="" />
            </div>

            <div class="live_match_details">
              <p class="series_name">Women's Ashes Test</p>
              <div class="match_details">
                <div class="teams">
                  <p class="team_name">England</p>
                  <p class="team_name">Australia</p>
                </div>
                <div class="scores">
                  <p class="team_score">289/7</p>
                  <p class="team_score">245/10</p>
                </div>
              </div>
              <div class="match_result">
                <p>England Won by 59 runs</p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-3 match_single">
          <div class="live_match">
            <div class="series_icon">
              <img class="icon" src={intl} alt="" />
            </div>

            <div class="live_match_details">
              <p class="series_name">Freedom Trophy</p>
              <div class="match_details">
                <div class="teams">
                  <p class="team_name">India</p>
                  <p class="team_name">South Africa</p>
                </div>
                <div class="scores">
                  <p class="team_score">289/7</p>
                  <p class="team_score">245/10</p>
                </div>
              </div>
              <div class="match_result">
                <p>South Africa Won by 7 wickets</p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-3 match_single">
          <div class="live_match">
            <div class="series_icon">
              <img class="icon" src={domain} alt="" />
            </div>

            <div class="live_match_details">
              <p class="series_name">Domain Test Series</p>
              <div class="match_details">
                <div class="teams">
                  <p class="team_name">New Zealand</p>
                  <p class="team_name">Australia</p>
                </div>
                <div class="scores">
                  <p class="team_score">289/7</p>
                  <p class="team_score">245/10</p>
                </div>
              </div>
              <div class="match_result">
                <p>Australia Won by 89 runs</p>
              </div>
            </div>
          </div>
        </div> */
