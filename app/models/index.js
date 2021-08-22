const dbConfig = require("../config/db.config");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
//add table name in database
db.tutorials = require("./tutorial.model.js")(mongoose);

module.exports = db;