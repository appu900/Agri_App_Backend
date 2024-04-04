const express = require("express");
const router = express.Router();
const PostController = require("../../controllers/post-controller");
const LikeController = require("../../controllers/like-controller");

router.post("/posts", PostController.createPost);
router.post("/likes/toggle", LikeController.toggleLike);

module.exports = router;
