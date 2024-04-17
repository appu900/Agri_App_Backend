const express = require("express");
const router = express.Router();
const PostController = require("../../controllers/post-controller");
const LikeController = require("../../controllers/like-controller");
const CommentController = require("../../controllers/comment-controller");
const AuthController = require("../../controllers/Auth-controller");
const { authenticate } = require("../../middlewares/authenticate");

router.post("/posts", authenticate, PostController.createPost);
router.get("/post/:id", PostController.getAPost);

router.post("/likes/toggle", LikeController.toggleLike);
router.post("/comments", CommentController.createComment);

router.post("/signup", AuthController.signUp);
router.post("/login", AuthController.login);

module.exports = router;
