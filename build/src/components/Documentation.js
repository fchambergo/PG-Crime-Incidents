import React from 'react';

class Documentation extends React.Component{

  render(){
    return(
      <div className="ui container">
        <h1 className="title">Our Web Application</h1>
        <hr></hr>

        <h3 className="header">Technologies Used</h3>
        <p className="paragraph">
        Throughout this web application, a variety of technologies were used including the Semantic UI css framework, React.js javascript library, and CanvasJS charting library. 
        </p>

        {/* Insert Image here */}
        <div class="ui stackable grid">
          <div class="four wide column">
            <img className="ui fluid image animated fadeInLeft" src={require('../static/semantic-ui-logo.png')} />
          </div>
          <div class="twelve wide column">
            <h3 className="header">Semantic UI</h3>
            <p className="paragraph">
              <a href="https://semantic-ui.com/">Semantic UI</a> was implemented to create the design and responsiveness of our application. Using the Semantic UI css easy to read documentation, we were able to link the CDN to our application
              which gave us access to its class names to create components outside the box. Some components we utilized were the buttons, text, grid, columns and many more.
            </p>
          </div>
        </div>

        <div class="ui stackable grid">
          <div class="four wide column">
            <img className="ui fluid image animated fadeInLeft" src={require('../static/react-icon.png')} />
          </div>
          <div class="twelve wide column">
            <h3 className="header">React.js</h3>
            <p className="paragraph">
              <a href="https://reactjs.org/">React.js</a> was implemented to create the components of our pages. Within React.js, we used the <em>react-router-dom</em> library to allow for navigation throughout our web application.
              We created properties within our homepage to pass to our Graph component so the graph can dynamically change data for crime incidents depending on the user selected month and year.
            </p>
          </div>
        </div>

        <div class="ui stackable grid">
          <div class="four wide column">
            <img className="ui fluid image animated fadeInLeft" src={require('../static/canvasjs.jpg')} />
          </div>
          <div class="twelve wide column">
            <h3 className="header">CanvasJS</h3>
            <p className="paragraph">
              <a href="https://canvasjs.com/">CanvasJS</a> was implemented to create the visualization on our homepage. We manipulated the data to calculate the sum of the incident types from the user selected month and year to use as data points for our graph.
              Specific years and months were passed on as properties from the Homepage component. 
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default Documentation;