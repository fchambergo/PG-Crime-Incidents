import React from 'react';
import Graph from './Graph';
import ChartGraph from "./ChartGraph";

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

          <div className="two ui buttons">

            {/*Years dropdown */}
            <div className="fluid big ui secondary basic simple dropdown button">
              <div className="default text">Year</div>
              <i className="dropdown icon"></i>
              <div className="menu">
                <div className="item" onClick={()=> {
                  this.setState({
                    year: "2017",
                    year_num: 117,
                    month_num: 12,
                    month: "All"
                    });
                  this.toggleGraph();
                  }}>2017</div>
                <div className="item" onClick={() => {
                  this.setState({
                    year: "2018",
                    year_num: 118,
                    month_num: 12,
                    month: "All"
                    });
                  this.toggleGraph();
                  }}>2018</div>
                <div className="item" onClick={() => {
                  this.setState({
                    year: "2019",
                    year_num: 119,
                    month_num: 12,
                    month: "All"
                    });
                  this.toggleGraph();
                  }}>2019</div>
                <div className="item" onClick={() => {
                  this.setState({
                    year: "2020",
                    year_num: 120,
                    month_num: 12,
                    month: "All"
                    });
                  }}>2020</div>
              </div>
            </div>
          </div>

           {/*Graph*/}
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