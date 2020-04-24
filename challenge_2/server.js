const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios');

const port = 3001;

app.use(express.static(path.join(__dirname, '/public')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())


app.post("/api/BTC", (req, res) => {
  
    const url = `https://api.coindesk.com/v1/bpi/historical/close.json?start=${req.body.start}&end=${req.body.end}`;

    axios.get(url)
      .then(results => {
        res.send(results.data);
      })
      .catch(error => {
        console.log(error);
      });
})

app.listen(port, () => console.log(`\ncrypto awaits on port ${port}`))


