import React, { Component } from "react";
import '../components/custom.css';
import axios from 'axios';
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import Pagination from "react-js-pagination";
import Leaderboard from './Leaderboard'



class LeagueListDesign extends Component {
    state= {
        leagues: [],
        currentpage: 1,
        postPerPage: 1
        
    }

componentDidMount(){
    var headers = {
        ApiKey: "6s3C12rE47",
        consumerKey: "1S2c4R7e36_"
      };
      axios
        .get(
          " https://cors-anywhere.herokuapp.com/https://sportapi.cricclubs.com/sport/league/cleague ",
          { headers }
        )
        .then(res => {
          this.setState({
            leagues: res.data.data
          });
          
        });
}

 nextPage = () => {

    const pageNumber =2;
     
     for(let i=1; i<= Math.ceil(this.state.leagues.lenght/this.state.postPerPage);i++){
         this.setState({
             currentpage: pageNumber
         })
         
     }
     console.log(pageNumber);
 }


  render() {
      const indexOfLastPage = this.state.currentpage * this.state.postPerPage;
      const indexOfFirstPage = indexOfLastPage - this.state.postPerPage;
     
      const {leagues} = this.state;
    return (
		<div class="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-12 m-t-2">

                        <div class="row">
                            <div class="col-lg-3 col-md-3 col-sm-6">
                                <div class="panel panel-default b-a-0 bg-gray-dark">
                                    <div class="panel-heading bg-primary-i">
                                        <div class="media">
                                            <div class="media-body">
                                                <span class="text-uppercsase">15 Leagues</span>            
                                            </div>
                                            <div class="media-right">
                                                <h1 class="display-4 m-t-0 m-b-0">T10</h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="panel-body p-t-1 p-b-1">
                                        
            {leagues
              .filter(league => league.seriesType == "Ten10")
              .map((league, key) => (
                <Link to={`/fixture/${league.leagueId}`}>
                                        <div class="" key={league.leagueId}>
                                            <h3>{league.name}</h3>
                                            <div class="row">
                                                <div class="col-lg-6 col-md-6 col-sm-12">
                                                    <h5 class="m-b-0"> <i class="fa fa-calender"></i> Start Date</h5>
                                                    <p>{league.startDate}</p>
                                                </div>
                                                <div class="col-lg-6 col-md-6 col-sm-12">
                                                    <h5 class="m-b-0">Ball Type</h5>
                                                    <p>Leather Ball</p>
                                                </div>
                                            </div>
                                            <p class="small text-uppercase m-t-2"><strong>Progress</strong></p>
                                            <div class="progress">
                                                <div class="progress-bar" role="progressbar" aria-valuenow="2" aria-valuemin="0" aria-valuemax="100" style={{minWidth: "2em", width: "35%"}}>
                                                    35%
                                                </div>
                                            </div>
                                            <hr/>
                                        </div>
                                               </Link> ))}
                                        <div class="btn-group" role="group" aria-label="...">
                                            <button type="button" class="btn btn-sm btn-default">View All</button>
                                        </div>
                                        <div class="btn-group pull-right" role="group" aria-label="...">
                                            <button type="button" class="btn btn-sm btn-default"><i class="fa fa-angle-left"></i></button>
                                            <button type="button" class="btn btn-sm btn-default"><i class="fa fa-angle-right"></i></button>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-3 col-sm-6">
                                <div class="panel panel-default b-a-0 bg-gray-dark">
                                    <div class="panel-heading bg-success-i">
                                        <div class="media">
                                            <div class="media-body">
                                                <span class="text-uppercsase">36 Leagues</span>            
                                            </div>
                                            <div class="media-right">
                                                <h1 class="display-4 m-t-0 m-b-0">T20</h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="panel-body p-t-1 p-b-1">
                                    {leagues
              .filter(league => league.seriesType == "Twenty20").slice(indexOfFirstPage,indexOfLastPage)
              .map((league, key) => (
                <Link to={`/fixture/${league.leagueId}`}>
                                        <div class="" key={league.leagueId}>
                                            <h3>{league.name}</h3>
                                            <div class="row">
                                                <div class="col-lg-6 col-md-6 col-sm-12">
                                                    <h5 class="m-b-0"> <i class="fa fa-calender"></i> Start Date</h5>
                                                    <p>{league.startDate}</p>
                                                </div>
                                                <div class="col-lg-6 col-md-6 col-sm-12">
                                                    <h5 class="m-b-0">Ball Type</h5>
                                                    <p>Leather Ball</p>
                                                </div>
                                            </div>
                                            <p class="small text-uppercase m-t-2"><strong>Progress</strong></p>
                                            <div class="progress">
                                                <div class="progress-bar" role="progressbar" aria-valuenow="2" aria-valuemin="0" aria-valuemax="100" style={{minWidth: "2em", width: "76%"}}>
                                                    76%
                                                </div>
                                            </div>
                                            <hr/>
                                        </div>
                                         </Link>   ))}
                                        <div class="btn-group" role="group" aria-label="...">
                                            <button type="button" class="btn btn-sm btn-default">View All</button>
                                        </div>
                                        <div class="btn-group pull-right" role="group" aria-label="...">
                                            <button type="button" class="btn btn-sm btn-default"><i class="fa fa-angle-left"></i></button>
                                            <button type="button" class="btn btn-sm btn-default" onClick = { this.nextPage}><i class="fa fa-angle-right" ></i></button>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-3 col-sm-6">
                                <div class="panel panel-default b-a-0 bg-gray-dark">
                                    <div class="panel-heading bg-info-i">
                                        <div class="media">
                                            <div class="media-body">
                                                <span class="text-uppercsase">29 Leagues</span>            
                                            </div>
                                            <div class="media-right">
                                                <h1 class="display-4 m-t-0 m-b-0">ODI</h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="panel-body p-t-1 p-b-1">
                                    {leagues
              .filter(league => league.seriesType == "One Day")
              .map((league, key) => (
                <Link to={`/fixture/${league.leagueId}`}>
                                        <div class="" key={league.leagueId}>
                                            <h3>{league.name}</h3>
                                            <div class="row">
                                                <div class="col-lg-6 col-md-6 col-sm-12">
                                                    <h5 class="m-b-0"> <i class="fa fa-calender"></i> Start Date</h5>
                                                    <p>{league.startDate}</p>
                                                </div>
                                                <div class="col-lg-6 col-md-6 col-sm-12">
                                                    <h5 class="m-b-0">Ball Type</h5>
                                                    <p>Leather Ball</p>
                                                </div>
                                                </div>
                                            <p class="small text-uppercase m-t-2"><strong>Progress</strong></p>
                                            <div class="progress">
                                                <div class="progress-bar" role="progressbar" aria-valuenow="2" aria-valuemin="0" aria-valuemax="100" style={{minWidth: "2em", width: "100%"}}>
                                                    100%
                                                </div>
                                            </div>
                                            <hr/>
                                        </div>
             </Link>
              ))}

                                        <div class="btn-group" role="group" aria-label="...">
                                            <button type="button" class="btn btn-sm btn-default">View All</button>
                                        </div>
                                        <div class="btn-group pull-right" role="group" aria-label="...">
                                            <button type="button" class="btn btn-sm btn-default"><i class="fa fa-angle-left"></i></button>
                                            <button type="button" class="btn btn-sm btn-default"><i class="fa fa-angle-right"></i></button>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-3 col-sm-6">
                                <div class="panel panel-default b-a-0 bg-gray-dark">
                                    <div class="panel-heading bg-danger-i">
                                        <div class="media">
                                            <div class="media-body">
                                                <span class="text-uppercsase">9 Leagues</span>            
                                            </div>
                                            <div class="media-right">
                                                <h1 class="display-4 m-t-0 m-b-0">Test</h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="panel-body p-t-1 p-b-1">
                                    {leagues
              .filter(league => league.seriesType == "Test")
              .map((league, key) => (
                <Link to={`/fixture/${league.leagueId}`}>
                                        <div class=""  key={league.leagueId}>
                                            <h3>{league.name}</h3>
                                            <div class="row">
                                                <div class="col-lg-6 col-md-6 col-sm-12">
                                                    <h5 class="m-b-0"> <i class="fa fa-calender"></i> Start Date</h5>
                                                    <p>{league.startDate}</p>
                                                </div>
                                                <div class="col-lg-6 col-md-6 col-sm-12">
                                                    <h5 class="m-b-0">Ball Type</h5>
                                                    <p>Leather Ball</p>
                                                </div>
                                            </div>
                                            <p class="small text-uppercase m-t-2"><strong>Progress</strong></p>
                                            <div class="progress">
                                                <div class="progress-bar" role="progressbar" aria-valuenow="2" aria-valuemin="0" aria-valuemax="100" style={{minWidth: "2em", width: "43%"}}>
                                                    43%
                                                </div>
                                            </div>
                                            <hr/>
                                        </div>
             </Link>
              ))}

                                        <div class="btn-group" role="group" aria-label="...">
                                            <button type="button" class="btn btn-sm btn-default">View All</button>
                                        </div>
                                        <div class="btn-group pull-right" role="group" aria-label="...">
                                            <button type="button" class="btn btn-sm btn-default"><i class="fa fa-angle-left"></i></button>
                                            <button type="button" class="btn btn-sm btn-default"><i class="fa fa-angle-right"></i></button>
                                        </div>

                                    </div>
                                </div>
                            </div>


                        </div>
                        

                    
                        

                    </div>
                </div>
                
                <Leaderboard />
            </div>
          

        </div>
    );
  }
}
export default LeagueListDesign;
