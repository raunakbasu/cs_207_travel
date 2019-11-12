const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// initialize express app
const app = express();

// adding body-parser middleware to get the request body
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json('App works')
})

// add listening port
const port = process.env.PORT || 5003

app.listen(port, () => {
  console.log(`app listening at port ${port}`)
})
