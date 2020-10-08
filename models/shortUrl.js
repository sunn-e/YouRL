//to connect to mongodb
const mongoose = require("mongoose");

// to create short identifier
//has .generate() function that we will pass to shorturl as default
const shortId = require("shortid");

//db schema
// | fullurl | shorturl | clicks |
const shortUrlSchema = new mongoose.Schema({
  full: {
    type: String,
    required: true,
  },
  short: {
    type: String,
    required: true,
    default: shortId.generate,
  },
  clicks: {
    type: Number,
    required: true,
    default: 0,
  },
});

//now exporting this to hook model with database
// model name, schema name
module.exports = mongoose.model("shortUrl", shortUrlSchema);
