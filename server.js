const express = require('express');
const fetch = require('node-fetch');
const path = require("path");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* other url queries
ALL DATA v
https://data.princegeorgescountymd.gov/resource/wb4e-w4nf.json?$query=SELECT incident_case_id,date,clearance_code_inc_type LIMIT 68000

*/

/* Fetch data from API */
app.get('/api', (req, res) => {
    const baseURL = "https://data.princegeorgescountymd.gov/resource/wb4e-w4nf.json?"; //Base URL for API
    var API_query = "$query=SELECT incident_case_id,date,clearance_code_inc_type LIMIT 68000"; //API Query to select certain information. Filters out what is not needed
    fetch(baseURL + API_query)
      .then((res) => res.json())
      .then((data) => {
        res.send({ data: data });
      })
      .catch((err) => {
        console.log(err);
        res.redirect('/error');
      });
  });

/* Static files */
app.use(express.static('client/build'));

if(process.env.NODE_ENV === 'production'){
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client/build', 'index.html'));
  })
}


app.listen(port, () => console.log(`Example app listening on port ${port}!`));