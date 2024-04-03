const express = require("express");
const makeDatabaseConnection = require("./config/database");
const PostRepo = require("./repository/post-repository");
const Post = require("./models/Post");
const Comment = require("./models/comment");

const app = express();

app.listen(8000, async () => {
  console.log("server started");
  await makeDatabaseConnection();
});
