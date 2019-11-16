const express = require('express');
const fetch = require('node-fetch');

const app = express();
const port = 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* other url queries
ALL DATA v
https://data.princegeorgescountymd.gov/resource/wb4e-w4nf.json?$query=SELECT incident_case_id,date,clearance_code_inc_type LIMIT 68000


*/

app.get('/api', (req, res) => {
    const baseURL = "https://data.princegeorgescountymd.gov/resource/wb4e-w4nf.json?$query=SELECT incident_case_id,date,clearance_code_inc_type WHERE date between '2019-08-26T12:00:00' and '2019-11-15T10:00:00' LIMIT 20000";
    fetch(baseURL)
      .then((res) => res.json())
      .then((data) => {
        res.send({ data: data });
      })
      .catch((err) => {
        console.log(err);
        res.redirect('/error');
      });
  });


app.listen(port, () => console.log(`Example app listening on port ${port}!`));