const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
      max: [100000, "world limit exceed"],
    },

    hashTags: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "HashTag",
      },
    ],
  },

  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
