const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const keys = require("./config/keys");
const passport = require("passport");
const users = require("./routes/api/user");

// initialize express app
const app = express();

// adding body-parser middleware to get the request body
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use(bodyParser.json());

// establish a mongoose connection
const db = keys.mongoURI;
mongoose
  .connect(
    db,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )
  .then(res => {
    console.log("Database is sconnected successfully");
  })
  .catch(err => {
    consol.log(err);
  });

// dummy route for test
app.get("/", (req, res) => {
  res.json("App works");
});

// Add passport authentication
app.use(passport.initialize());
require("./config/passport")(passport);

// Add routing
app.use("/api/user", users);

// add listening port
const port = process.env.PORT || 5003;

app.listen(port, () => {
  console.log(`app listening at port ${port}`);
});
