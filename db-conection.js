const mongoose = require("mongoose");
const db = mongoose.connect(process.env.DB,{
  useUnifieldTopology: true,
  useNewUrlParser: true,
});

module.exports.db;