//to connect to mongodb
const mongoose = require("mongoose");

// to create short identifier
//has .generate() function that we will pass to shorturl as default
const shortId = require("shortid");

//db schema
// | fullurl | shorturl | clicks |
const shortUrlSchema = new mongoose.Schema({
  fullurl: {
    type: String,
    required: true,
  },
  shorturl: {
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
modules.exports = mongoose.model("shortUrl", shortUrlSchema);
