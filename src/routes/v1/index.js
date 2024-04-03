const express = require("express");
const router = express.Router();
const PostController = require("../../controllers/post-controller");

router.post("/posts", PostController.createPost);

module.exports = router;
