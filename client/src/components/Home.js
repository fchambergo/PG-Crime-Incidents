import React from 'react';
import Graph from './Graph';

import "../css/styles.css";

class Home extends React.Component{

  constructor(){
    super();
    this.state = {
      data: [],
      show: false,
      year: "",
      year_num: 0,
      month: "",
      month_num: 0
    }

    this.toggleGraph = this.toggleGraph.bind(this)
  }

  toggleGraph(){
    const {show} = this.state;
    this.setState({ show: true })
  }

  /* Call API from back-end */
  componentDidMount(){
    fetch("/api")
      .then(res => res.json())
      .then(data => this.setState(data, ()=>console.log('Data fetched...', data)));
  }

  render(){
    return(
      /* Jumbotron here */
      <div>
        <div className="ui inverted main vertical masthead center aligned segment">
          <div className="ui text header-content container">
            <p className="ui header">Prince George's Police Department</p>
            <h1 className="ui header">Crime Incidents February 2017 - Present</h1>
          </div>  
        </div>

        <div className="ui home container">
          <h3 className="header animated fadeInLeft">Prince George's County Crime Incident Data Visualization</h3>
          <p className="paragraph animated fadeInLeft">
            This visualization shows the total number of types of crime incidents that occurred in the Prince George's County area since February 2017 up till today.
            The types of crime incidents include <b>Accidents</b>, <b>Assaults</b>, <b>Automobile</b> (Stolen), <b>Breaking and Entering</b>, <b>Homicides</b>, <b>Robbery</b>, <b>Sexual Offenses</b>, <b>Theft</b>, <b>Vandalism</b>.
            This visualization helps compare the total number of crime incidents that occurred within each year from 2017. In order to dive deeper, we implemented a way to look in each month within each year.
            This way, we can see a trend of the crime incidents within each year.
          </p>

          <div className="four ui buttons">
            <button className="massive ui button paragraph" onClick={()=> {
              this.setState({
                year: "2017",
                year_num: 117,
                month_num: 12,
                month: "All"
              });
              this.toggleGraph();
            }}>2017</button>
            <button className="massive ui button paragraph" onClick={() => {
              this.setState({
                year: "2018",
                year_num: 118,
                month_num: 12,
                month: "All"
              });
              this.toggleGraph();
            }}>2018</button>
            <button className="massive ui button paragraph" onClick={() => {
              this.setState({
                year: "2019",
                year_num: 119,
                month_num: 12,
                month: "All"
              });
              this.toggleGraph();
            }}>2019</button>
            
            <div class="fluid big ui simple dropdown button">
            <div class="default text">Select Month</div>
            <i class="dropdown icon"></i>
            <div class="menu">
              
            <div class="item" onClick={() => {
                this.setState({
                  month: "All",
                  month_num: 12
                });
                this.toggleGraph();
              }}>All</div>
              <div class="item" onClick={() => {
                this.setState({
                  month: "January",
                  month_num: 0
                });
                this.toggleGraph();
              }}>January</div>
              <div class="item" onClick={() => {
                this.setState({
                  month: "February",
                  month_num: 1
                });
                this.toggleGraph();
              }}>February</div>
              <div class="item" onClick={() => {
                this.setState({
                  month: "March",
                  month_num: 2
                });
                this.toggleGraph();
              }}>March</div>
              <div class="item" onClick={() => {
                this.setState({
                  month: "April",
                  month_num: 3
                });
                this.toggleGraph();
              }}>April</div>
              <div class="item" onClick={() => {
                this.setState({
                  month: "May",
                  month_num: 4
                });
                this.toggleGraph();
              }}>May</div>
              <div class="item" onClick={() => {
                this.setState({
                  month: "June",
                  month_num: 5
                });
                this.toggleGraph();
              }}>June</div>
              <div class="item" onClick={() => {
                this.setState({
                  month: "July",
                  month_num: 6
                });
                this.toggleGraph();
              }}>July</div>
              <div class="item" onClick={() => {
                this.setState({
                  month: "August",
                  month_num: 7
                });
                this.toggleGraph();
              }}>August</div>
              <div class="item" onClick={() => {
                this.setState({
                  month: "September",
                  month_num: 8
                });
                this.toggleGraph();
              }}>September</div>
              <div class="item" onClick={() => {
                this.setState({
                  month: "October",
                  month_num: 9
                });
                this.toggleGraph();
              }}>October</div>
              <div class="item" onClick={() => {
                this.setState({
                  month: "November",
                  month_num: 10
                });
                this.toggleGraph();
              }}>November</div>
              <div class="item" onClick={() => {
                this.setState({
                  month: "December",
                  month_num: 11
                });
                this.toggleGraph();
              }}>December</div>
          </div>

        {/*Graph here*/}
        
          </div>
        </div>
                { this.state.show && <Graph 
                  json={this.state.data} 
                  year={this.state.year} 
                  year_num={this.state.year_num}
                  month={this.state.month}
                  month_num={this.state.month_num}
                /> }
          </div>
      </div>
    );
  }

}

export default Home;