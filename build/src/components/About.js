import React from 'react';

class About extends React.Component{

  render(){
    return(
      <div className="ui container">
        <h1 className="title">About</h1>
        <hr></hr>

        <h3 className="header">This section will explain the information problem trying to be solved.</h3>
        <p className="paragraph">
        Our application will help users to understand if there has been an increase 
        of crime in Prince George's County in the past few years? The data will help us
        to determind if there is a pattern to crime rates in the area? Which crime 
        incidents occurred the most for each year? Which months of the year have the year 
        does the most crime take place? Do some months exhimit higher crime rates than others?
        Do some streets or sectors show higher crime rates than others? 
        </p>

        <h3 className="header">This section will explain the source of our dataset and our solution</h3>
        <p className="paragraph">
        We decided to work with the "Crime Incidents February 2017 to Present" data set.
        We obtained it from the PG County Public API. Our system and our data set will 
        work together to create simple vizsualization. In order to prevent individuals 
        from just simply viewing raw data, the system will aggregate relevant data and 
        compile them into categorized screens. For example (Crime by area, crime by crime, 
        crime over months, etc.) By providing a complete detail of when, where and how crime
        is facilitated we hope to give residents of Prince George's County the full ability
        to best avoid such activity.
        </p>




      </div>
    );
  }

}

export default About;