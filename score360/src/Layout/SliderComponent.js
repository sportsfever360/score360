import React, { Component } from "react";
import team1 from "../logo/team1logo.png";
import team2 from "../logo/team2logo.png";
import intl from "../logo/intl_icon.png";
import domain from "../logo/domain_icon.png";
import { Consumer } from "../Context";
import "./slider.css";

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
              <div class="match_single">
                <div class="row">
                  <div class="col-lg-12">
                    <h3 class="series_name ">ICC WC 2019</h3>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-8 d-flex">
                    <img class="team_logo m-1 " src={team1} alt="" />
                    <p class="team_name">England</p>
                  </div>
                  <div class="col-lg-4">
                    <p class="team_one_score">189/7</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-8 d-flex">
                    <img class="team_logo m-1" src={team2} alt="" />
                    <p class="team_name">England</p>
                  </div>
                  <div class="col-lg-4">
                    <p class="team_two_score">178/10</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-12">
                    <h3 class="result">Pakistan won by 3 wickets.</h3>
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

{
  /* <div class="score_header">
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
            </div> */
}
