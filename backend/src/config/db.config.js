const mongoose = require("mongoose");
const MONGO_URI = process.env.MONGO_URI ? process.env.MONGO_URI : "tournament";

const connectDatabase = () => {
  mongoose
    .connect("mongodb://localhost:27017/"+MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("Mongoose Connected");
    });
};

module.exports = connectDatabase;
