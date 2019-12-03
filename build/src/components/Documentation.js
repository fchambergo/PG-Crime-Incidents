import React from 'react';

class Documentation extends React.Component{

  render(){
    return(
      <div className="ui container">
        <h1 className="title">How to Use</h1>
        <hr></hr>

        <h3 className="header">This section will explain how to use the application and possible features it contains.</h3>
        <p className="paragraph">
        All of our information will be presented in a graph format. The graphs will display 
        changes in crime trends in a way that will help with human visual processing and 
        understanding. Some features will include displaying the change of our data after 
        we implement changing variables or conditions that impact our data in a positive or 
        negative way. 
        </p>

        {/* Insert Image here */}
        <h3 className="header">This section will explain the step illustrated by the image</h3>
        <p className="paragraph">
        This photo is a picture of ReactJS. React is a an open source library for javascript and
        it helped us to build our user interface. React has also helped us to created user 
        interaction componenents to our project. We used react because it facilitated the process
        for use to manipulate our application in the most efficient and flexible way as possible. 
        React has the ability to update as your data changes. 
        </p>

        {/* Insert Image here */}
        <h3 className="header">This section will explain the step illustrated by the image</h3>
        <p className="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
        nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
        officia deserunt mollit anim id est laborum.
        </p>

        {/* Possible video here */}
      </div>
    );
  }

}

export default Documentation;