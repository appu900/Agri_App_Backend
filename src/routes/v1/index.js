const express = require("express");
const router = express.Router();
const PostController = require("../../controllers/post-controller");
const LikeController = require("../../controllers/like-controller");
const CommentController = require("../../controllers/comment-controller");
const AuthController = require("../../controllers/Auth-controller");

router.post("/posts", PostController.createPost);
router.post("/likes/toggle", LikeController.toggleLike);
router.post("/comments", CommentController.createComment);
router.get("/post/:id", PostController.getAPost);

router.post("/signup", AuthController.signUp);

module.exports = router;
