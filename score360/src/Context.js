import React, { Component } from "react";
import axios from "axios";
//import uuid from "uuid";

const Context = React.createContext();

export class Provider extends Component {
  state = {
    matches: [
      {
        matchId: "1",
        t1Name: "zalmi",
        t2Name: "spirit",
        t1Total: "180",
        t2Total: "165",
        t1Wickets: "10",
        t2Wickets: "4",
        match_result: "omer won the match"
      },
      {
        matchId: "2",
        t1Name: "tiger",
        t2Name: "wolf",
        t1Total: "180",
        t2Total: "165",
        t1Wickets: "10",
        t2Wickets: "4",
        match_result: "omer won the match"
      },
      {
        matchId: "3",
        t1Name: "cheetah",
        t2Name: "wilders",
        t1Total: "180",
        t2Total: "165",
        t1Wickets: "10",
        t2Wickets: "4",
        match_result: "omer won the match"
      },
      {
        matchId: "4",
        t1Name: "manchester",
        t2Name: "chelsea",
        t1Total: "180",
        t2Total: "165",
        t1Wickets: "10",
        t2Wickets: "4",
        match_result: "omer won the match"
      },
      {
        matchId: "5",
        t1Name: "wired",
        t2Name: "unwired",
        t1Total: "180",
        t2Total: "165",
        t1Wickets: "10",
        t2Wickets: "4",
        match_result: "omer won the match"
      }
    ],
    loading: false
  };
  // componentDidMount() {
  //   var headers = {
  //     ApiKey: "6s3C12rE47",
  //     consumerKey: "1S2c4R7e36_"
  //   };
  //   axios
  //     .get(
  //       "https://cors-anywhere.herokuapp.com/https://sportapi.cricclubs.com/sport/liveScoreOverlay/liveScoreOverlayData?clubId=12047&matchId=5",
  //       { headers }
  //     )
  //     .then(res => {
  //       this.setState({
  //         matches: res.data.data,
  //         loading: true
  //       });
  //     });
  // }

  render() {
    const { loading } = this.state;
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
export const Consumer = Context.Consumer;
