const express = require('express');
const fetch = require('node-fetch');

const app = express();
const port = 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/api', (req, res) => {
    const baseURL = 'https://data.princegeorgescountymd.gov/resource/wb4e-w4nf.json';
    fetch(baseURL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        res.send({ data: data });
      })
      .catch((err) => {
        console.log(err);
        res.redirect('/error');
      });
  });


app.listen(port, () => console.log(`Example app listening on port ${port}!`));