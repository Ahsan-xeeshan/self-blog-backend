const express = require("express");
const route = require("./route");
const cors = require("cors");
const app = express();
const dbConnection = require("./config/dbConnection");
require("dotenv").config();

const port = 3000;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(route);

dbConnection();
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
