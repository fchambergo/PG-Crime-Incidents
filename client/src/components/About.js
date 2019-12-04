import React from 'react';

class About extends React.Component{

  render(){
    return(
      <div className="ui container">
        <h1 className="title">About</h1>
        <hr></hr>

        <h3 className="header animated fadeInLeft">The Problem</h3>
        <p className="paragraph animated fadeInLeft">
        Unfortunately, there have been multiple crime incidents in the Prince Georges County area for many years now.
        There have been multiple different types of crime incidents that occurred ranging from Theft to Sexual Assault.
        One of the major concerns about this dilemma is that there is an increase of crime within Prince George's County over the past few years.
        The groups that this problem affects include the residents of Prince George's County and the Prince George's County Police Department. 
        These residents would want to be aware of the possible harmful events that occur in their neighborhood.
        Secondly, the police department would also benefit in knowing what incidents occur the most and possibly react with a course of action.
        </p>

        <h3 className="header animated fadeInLeft">Our Solution</h3>
        <p className="paragraph animated fadeInLeft">
        Thanks to the <a href="https://data.princegeorgescountymd.gov/">Prince George's County Open Data API</a>, we were able to access the
        <a href="https://data.princegeorgescountymd.gov/Public-Safety/Crime-Incidents-February-2017-to-Present/wb4e-w4nf"> Crime Incidents February 2017 to Present</a> Dataset in order to help us find answers to important questions such as:
        <ul>
          <li>Has there been an increase of crime in Prince George's County within the past few years?</li>
          <li>Which year has the most amount of crime incidents occurred?</li>
          <li>Which crime incidents occurred most frequently for each month of the years?</li>
          <li>Do some months exhibit higher crime rates than others?</li>
        </ul>
        Using the information from the dataset, we created a data visualization that calculated the total number of each type of crime incidents that occurred within a given month in a given year.

        </p>




      </div>
    );
  }

}

export default About;