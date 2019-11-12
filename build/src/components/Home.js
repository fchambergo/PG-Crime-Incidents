import React from 'react';
import "../css/styles.css";

class Home extends React.Component{

  constructor(){
    super();
    this.state = {
      data: []
    }
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
          officia deserunt mollit anim id est laborum.
          </p>

          <div className="ui three years item menu">
            <a href="/#" className="item paragraph">2017</a>
            <a href="/#" className="item paragraph">2018</a>
            <a href="/#" className="item paragraph">2019</a>
          </div>

        {/*Graph here*/}



        </div>
      </div>
    );
  }

}

export default Home;