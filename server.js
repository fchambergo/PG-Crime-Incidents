const express = require('express');
const fetch = require('node-fetch');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/build"));

// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, 'build', 'public', 'index.html'));
// })

// if(process.env.NODE_ENV === 'production'){
//   app.use(express.static('build'));
// }

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* other url queries
ALL DATA v
https://data.princegeorgescountymd.gov/resource/wb4e-w4nf.json?$query=SELECT incident_case_id,date,clearance_code_inc_type LIMIT 68000


*/


app.get('/api', (req, res) => {
    const baseURL = "https://data.princegeorgescountymd.gov/resource/wb4e-w4nf.json?$query=SELECT incident_case_id,date,clearance_code_inc_type LIMIT 68000";
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

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname = '/build/public/index.html'));
// })


app.listen(port, () => console.log(`Example app listening on port ${port}!`));