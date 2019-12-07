## Final Report

**Title**: Crime Incidents February 2017 - Present

**Team members**: Frank Chambergo, Thomas Nguyen, Avery Parker, Gian Elim, Angel Lopez, Maimouna Camara

**Link to where your app is running**: https://pgcrimeincidents.herokuapp.com/

**Information problem you're trying to solve**:
There have been multiple crime incidents within Prince George's County over the past few years. Different types of crime incidents occurred ranging from Theft to Sexual Assault. The question we are trying to answer is if there has been an increase in crime in Prince George's County over the past few years.

**Identified stakeholders/target browsers**:
The stakeholders who would benefit from this application would be PG County Residents and the PG County Police Department. The residents would want to be aware of the possible, harmful and most frequent events that occur in their neighborhood. The police department would benefit in knowing what incidents occur the most and possibly react with a strict course of action.

**Data you chose to work with**:
The data we decided to work with was the *Crime Incidents February 2017 to Present* dataset. We found this data on the Prince George's County Open Data API. This dataset has 67,000+ rows of data about crime incidents that occurred since February 2017. It is constantly being updated weekly with new crime incident occurrences. 
Link: https://data.princegeorgescountymd.gov/Public-Safety/Crime-Incidents-February-2017-to-Present/wb4e-w4nf

**Chosen strategies and solutions for the problem**:
In order to answer our question, we had to figure out a way to compare the crime incidents over the years. Therefore, we decided to use a data visualization that displays the total number of crime incidents per crime incident type for each month in each year.

**Technical system decision rationale**:
For this project, we decided to use a variety of technologies. The technologies implemented *Semantic UI*, *React.js*, and *Canvas.js*

We used *Semantic UI* to make our application much more responsive and it has easy to follow/read documentation. It helped make our tasks on CSS much simpler.

We used *React.js* to create the foundation of our project. It was a good learning experience for us all since it is one of the most popular and widely used javascript libraries.

Lastly, we used *Canvas.js* to create our graphs and display our data. It had clear documentation and examples on its website to follow.

**How/if your final system helps to address the problem**:
We believe our final system helps address our problem since the key component to solving it is to make comparisons of the crime incidents over the years. The graph does exactly that. A user can visually see the change in crime incidents by looking at the graph.

**Challenges faced and impact on final design**:
Firstly, we had a tough challenge of loading our data without making the application load slowly. Our dataset is big  and it made the performance less than ideal. However, we queried the data to return only the necessary variables to form a graph.

Secondly, we had difficulty in using the data to create a line graph which was part of our initial design but we found that it was much simpler to create a bar graph to answer the same question. Making the data visualization a bar graph made our application much more interactive with the user since the user has the choice to pick the year and month they want to view.

Lastly, we had a major difficult time with Heroku. We are not that experienced with it so our application took a little while longer to deploy. Thanks to a lot of online resources and tutorials, the site is up and running

**Possible future work directions with this problem**:
Now that we have the data and can visually compare it, we can do a deeper dive analyzing the incidents and their cause. Perhaps there was a concurrent event that happened at the same time as theses incidents that encouraged people to perform these crime incidents. Police departments can look at the data and see what incidents they should be more on the lookout for.

Our dataset had other variables that we did not use. These variables included coordinates and street names that can help a user see where exactly these crime incidents take place as well. Using this information, our next steps would be to include a map that has labeled the crime incidents in each sector of the map. Residents would want to be aware of where the most frequent incidents occur so they can be more cautious when they are in those areas. 