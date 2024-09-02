const mongoose = require("mongoose");
require("dotenv").config();
function dbConnection() {
  mongoose.connect(process.env.DB_URL).then(() => console.log("Connected!"));
}

module.exports = dbConnection;
