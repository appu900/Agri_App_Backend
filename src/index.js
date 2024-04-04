const express = require("express");
const makeDatabaseConnection = require("./config/database");
const PostService = require("./service/postService");
const apiRoutes = require("./routes/index");
const { UserRepository, PostRepository } = require("./repository/index");
const LikeService = require("./service/like-service");

const app = express();
app.use(express.json());
app.use("/api", apiRoutes);

app.listen(8000, async () => {
  console.log("server started");
  await makeDatabaseConnection();
  const userRepo = new UserRepository();
  const postRepo = new PostRepository();
  const posts = await postRepo.getAll(0, 10);
  const likeService = new LikeService();
  const response = await likeService.toggelLike(posts[0].id, "Post", "660e3608425b7bf148750c35");
  console.log(response);
});
