import React from 'react';
import Graph from './Graph';

import "../css/styles.css";

class Home extends React.Component{

  constructor(){
    super();
    this.state = {
      data: [],
      show: false,
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
          <h3 className="header">These sections will explain what the application is and what the problem solves</h3>
          <p className="paragraph">
          As you can see we created a visualization across three months using canvasJS. 
            When you click on the rows you can see each individual graph for the specific months over a period of time(Years).
            These will be September, October, and Decemeber from 2017-2019. These graph will display the trends over a period of time, 
            which also includes the types of crime involved. Our dataset will help our audience visualize the trends for
            better understanding.Overall, with our system we hope to create a visualization of a graph where it displays a pattern over time. 
          </p>

          <div className="four ui buttons">
          <button className="massive ui button paragraph" onClick={()=> {
              this.setState({
                month: "January",
                month_num: 0
              });
              this.toggleGraph();
            }}>January</button>
            <button className="massive ui button paragraph" onClick={() => {
              this.setState({
                month: "February",
                month_num: 1
              });
              this.toggleGraph();
            }}>February</button>
            <button className="massive ui button paragraph" onClick={() => {
              this.setState({
                month: "March",
                month_num: 2
              });
              this.toggleGraph();
            }}>March</button>
            <div class="massive ui simple dropdown button">
              <input name="month_num" type="hidden"/>
              <div class="default text">Select month</div>
              <i class="dropdown icon"></i>
              <div class="menu">
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
            </div>
          </div>

        {/*Graph here*/}
        { this.state.show && <Graph json={this.state.data} month={this.state.month} num={this.state.month_num}/> }

        </div>
      </div>
    );
  }

}

export default Home;