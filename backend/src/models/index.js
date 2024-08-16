const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.match = require("./Match");
db.Tournament = require("./Tournament");
db.Player = require("./Players");

module.exports = db;
