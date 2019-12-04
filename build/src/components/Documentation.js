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
        <div class="ui stackable grid">
          <div class="four wide column">
            <img className="ui fluid image animated fadeInLeft" src={require('../static/react-logo.jpeg')} />
          </div>
          <div class="twelve wide column">
            <h3 className="header">This section will explain the step illustrated by the image</h3>
            <p className="paragraph">
              This photo is a picture of ReactJS. React is a an open source library for javascript and
              it helped us to build our user interface. React has also helped us to created user 
              interaction componenents to our project. We used react because it facilitated the process
              for use to manipulate our application in the most efficient and flexible way as possible. 
              React has the ability to update as your data changes. 
            </p>
          </div>
        </div>

        <div class="ui stackable grid">
          <div class="four wide column">
            <img className="ui fluid image animated fadeInLeft" src={require('../static/canvasjs.jpg')} />
          </div>
          <div class="twelve wide column">
            <h3 className="header">This section will explain the step illustrated by the image</h3>
            <p className="paragraph">
              With our dataset we used canvasJS to display our data visualization. This allowed us and the 
              audience to visual what types of crime are happening over time for each specific month and year. 
              We created a bar chart using canvasJS to display the number of crime that occurred each month within 
              the year. This is a colorful visuailzation, which allows a better concept to view what is happening over time. 
            </p>
          </div>
        </div>

        {/* Possible video here */}
      </div>
    );
  }
}
export default Documentation;