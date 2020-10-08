const express = require("express");

//make basic app

const app = express();

//setting ejs as view engine
app.set("view engine", "ejs");

// index page with request and response parameters
app.get("/", (req, res) => {
  res.render("index");
});

// start listening on specified port
app.listen(process.env.PORT || 4567);
