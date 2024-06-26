const express = require("express");
const makeDatabaseConnection = require("./config/database");
const PostService = require("./service/postService");
const apiRoutes = require("./routes/index");
const { UserRepository, PostRepository } = require("./repository/index");
const LikeService = require("./service/like-service");
const passport = require("passport");
const { passportAuth } = require("./config/jwt-middleware");

const app = express();
app.use(express.json());
app.use(passport.initialize());
passportAuth(passport);
app.use("/api", apiRoutes);

app.listen(8000, async () => {
  console.log("server started");
  await makeDatabaseConnection();
});
