const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
      max: [100000, "world limit exceed"],
    },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Like",
      },
    ],
  },

  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
