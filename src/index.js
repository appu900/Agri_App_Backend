const express = require("express");
const makeDatabaseConnection = require("./config/database");


const app = express();

app.listen(8000, async () => {
  console.log("server started");
  await makeDatabaseConnection();
});



