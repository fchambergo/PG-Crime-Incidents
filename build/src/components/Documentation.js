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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
        nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
        officia deserunt mollit anim id est laborum.
        </p>

        
        <h3 className="header">This section will explain the step illustrated by the image</h3>
        <img src="../static/canvasjs.jpg" alt="canvasjs" width="200" height="150"></img>
        <p className="paragraph">
        With our dataset we used canvasJS to display our data visualization. This allowed us and the 
        audience to visual what types of crime are happening over time for each specific month and year. 
        We created a bar chart using canvasJS to display the number of crime that occurred each month within 
        the year. This is a colorful visuailzation, which allows a better concept to view what is happening. 
        </p>

        {/* Possible video here */}
      </div>
    );
  }
}
export default Documentation;