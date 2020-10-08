//web framework
const express = require("express");

//create basic app
const app = express();

//setting ejs as view engine
app.set("view engine", "ejs");

// to connect to database
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/urlShortner", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
//get
// index page with request and response parameters
app.get("/", (req, res) => {
  res.render("index");
});

//post
app.post("/shortUrls", (req, res) => {});
// start listening on specified port
app.listen(process.env.PORT || 4567);
