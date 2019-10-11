import React, { Component } from 'react'
import axios from 'axios'

 class Leaderboard extends Component {
	 state= {
         batmans: [],
         bowlers: []
	 }
	componentDidMount(){
		var headers = {
			ApiKey: "6s3C12rE47",
			consumerKey: "1S2c4R7e36_"
		  };
		  axios
			.get(
			  " http://sportapi.cricclubs.com/sport/batting/records?clubId=12047&teamId=14&leagueId=8&limit=5 ",
			  { headers }
			)
			.then(res => {
			  this.setState({
				batmans: res.data.data
			  });
			  
            });
            axios
			.get(
			  " http://sportapi.cricclubs.com/sport/ball/records?teamId=14&leagueId=8&clubId=12047&limit=5 ",
			  { headers }
			)
			.then(res => {
			  this.setState({
				bowlers: res.data.data
			  });
			  
			});
	}
	



	render() {
		const {batmans, bowlers}= this.state;
		
		return (
			
				<div class="row">
                            <div class="col-lg-6 col-md-6">

                                <div class="panel panel-default no-bg b-a-2 b-gray-dark">

                                    <div class="panel-heading">
                                        <h4 class="m-t-0 m-b-0">Batting Leaderboard</h4>
                                    </div>

                                    <div class="panel-body">

                                        <ul class="nav nav-tabs">
											
                                            <li role="presentation" class="active"><a href="javascript: void(0)">T10</a></li>
                                            <li role="presentation"><a href="javascript: void(0)">T20</a></li>
                                            <li role="presentation"><a href="javascript: void(0)">ODI</a></li>
                                            <li role="presentation"><a href="javascript: void(0)">Test</a></li>
                                        </ul>
                                        <table class="table">
                                            <thead>
                                                <tr>
                                                    <th class="small text-muted text-uppercase"><strong>Players</strong>
                                                    </th>
                                                    <th class="small text-muted text-uppercase"><strong>Matches Played</strong>
                                                    </th>
                                                    <th class="small text-muted text-uppercase"><strong>Strike Rate</strong>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
												{batmans.map(batmans=>(
														<tr>
														<td class="v-a-m">
															<div class="media media-auto">
																<div class="media-left">
																	<div class="avatar">
																		<img class="media-object img-circle" src="https://s3.amazonaws.com/uifaces/faces/twitter/saulihirvi/128.jpg" alt="Avatar"/>
																	</div>
																</div>
																<div class="media-body">
																	<span class="media-heading text-white">{batmans.firstName} {batmans.lastName}</span>
																	<br/>
																	<span class="media-heading"><span>Demo Team One, Islamabad</span></span>
																</div>
															</div>
														</td>
														<td class="v-a-m"><span class="text-white">{batmans.matches}</span>
														</td>
														<td class="v-a-m"> <span class="text-white">{Math.ceil(batmans.runsScored/batmans.ballsFaced * 100)}</span>   
													</td></tr>

												))}
                                                

                                                
                            
                                            </tbody>
                                        </table>
                                    </div>

                              
                                </div>
                            </div>

                            <div class="col-lg-6 col-md-6">

                                <div class="panel panel-default no-bg b-a-2 b-gray-dark">

                                    <div class="panel-heading">
                                        <h4 class="m-t-0 m-b-0">Bowling Leaderboard</h4>
                                    </div>

                                    <div class="panel-body">

                                        <ul class="nav nav-tabs">
                                            <li role="presentation" class="active"><a href="javascript: void(0)">T10</a></li>
                                            <li role="presentation"><a href="javascript: void(0)">T20</a></li>
                                            <li role="presentation"><a href="javascript: void(0)">ODI</a></li>
                                            <li role="presentation"><a href="javascript: void(0)">Test</a></li>
                                        </ul>
                                        <table class="table">
                                            <thead>
                                                <tr>
                                                    <th class="small text-muted text-uppercase"><strong>Players</strong>
                                                    </th>
                                                    <th class="small text-muted text-uppercase"><strong>Matches Played</strong>
                                                    </th>
                                                    <th class="small text-muted text-uppercase"><strong>Economy</strong>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {bowlers.map(bowlers=>(

<tr>
                                                    <td class="v-a-m">
                                                        <div class="media media-auto">
                                                            <div class="media-left">
                                                                <div class="avatar">
                                                                    <img class="media-object img-circle" src="https://s3.amazonaws.com/uifaces/faces/twitter/saulihirvi/128.jpg" alt="Avatar"/>
                                                                </div>
                                                            </div>
                                                            <div class="media-body">
                                                                <span class="media-heading text-white">{bowlers.firstName} {bowlers.lastName}</span>
                                                                <br/>
                                                                <span class="media-heading"><span>Demo Team One, Islamabad</span></span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td class="v-a-m"><span class="text-white">{bowlers.matches}</span>
                                                    </td>
                                                    <td class="v-a-m"> <span class="text-white">{Math.floor(bowlers.runs/(bowlers.balls/6))}</span>   
                                                </td></tr>
                                                ))}
                                                

                                               
                            
                                            </tbody>
                                        </table>
                                    </div>

                                    

                                </div>
                            </div>

                        </div>
		
		)
	}
}
export default Leaderboard;