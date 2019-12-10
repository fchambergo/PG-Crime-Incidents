# PG Crime Incidents
 Prince George's County Crime Incidents Web Application

<b>Description</b>: This project uses Prince George's County Open Data API to access the Crime Incidents February 2017 to Present Dataset in order to answer important questions such as:
- Has there been an increase of crime in Prince George's County within the past few years?
- Which year has the most amount of crime incidents occurred?
- Which crime incidents occurred most frequently for each month of the years?
- Do some months exhibit higher crime rates than others?
Using the information from the dataset, we created a data visualization that calculated the total number of each type of crime incidents that occurred within a given month in a given year.

<b>Link</b>: https://pgcrimeincidents.herokuapp.com/

<b>Description of Target Browsers</b>: This web application is primarily targeted to Desktop internet browsers. It was implemented in this manner due to the assumption that majority of the users that will be displaying/presenting this web application will be in an office/professional environment (i.e. using a desktop computer).

<b>Link to Users Manual</b>: [Click Here](./docs/user.md)
<b>Developer Manual</b>: Down Below

<b>Developer Manual</b>

<b>Instructions to use the Project</b>:
 1) Clone the repository: https://github.com/fchambergo/PG-Crime-Incidents.git
 2) This application uses Node.js for the backend. If you don't already have Node.js installed on your machine, you can do so here: https://nodejs.org/en/download/
 
 3) Open Terminal in the `PG-Crime-Incidents` folder and run: `npm install` to install the needed dependencies for the backend. Go into the `/client` folder and run `npm install` to install the needed dependencies for React.

    The following packages used `PG-Crime-Incidents` are:
    *concurrently  `npm install -g concurrently` - this runs two services at the same time
    *express `npm install express` - this is needed for various specifications
    *node-fetch `npm install node-fetch --save` - this fetches data from the api
    *nodemon `npm install -g nodemon` - this restarts our server automatically after any changes for quicker production
    *path `npm install --save path` - this allows file paths to be searched for and located

    The follow packages used in `client` are:
    *react `npm install --save react` - installs react
    *react-dom `npm install --save react-dom` - used for manipulation of DOM elements through react
    *react-router-dom `npm install --save react-router-dom` - used for linking pages together
    *react-scripts `npm install --save react-scripts` - installs react needed scripts


 4) Go to the `PG-Crime-Incidents folder` folder in your terminal and run `npm run dev` which will start the application and open a browser from React on your http://localhost:3000. To see the data being returned from the API, it can be seen on http://localhost:5000/api

 <b>API Endpoint</b>
 This application only utilizes a `GET` endpoint. The `GET` endpoint in the application calls data from the Prince George's County Open Data API for Crime Incidents from February 2017 - Present. The endpoint is queried to return the necessary variables needed from the API to construct the graph.

<b>Known Bugs</b>
*Our data only goes as far back as February 2017. Therefore, if the user selects the month January from 2017, the graph will display nothing as no data exists there.
*This dataset is constantly being updated every week. If the user is trying to pulls data during the beginning of the month (within the first 7 days), the graph may not display data as the dataset hasn't formed any data for that month yet. It is too soon in the new month. 

<b>Future Development</b>
*Add some more styling to enhance the user experience and appearance of the application
*Our dataset has other variables including coordinates and geographical locations of Prince George's County of where the crime incidents take place. In the future, we may construct a map using that information to continue in solving problems and questions for the residents and police department of Prince George's County. 

