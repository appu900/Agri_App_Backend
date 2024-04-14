const mongoose = require("mongoose");

// one post can have muliple comments and one comment can have multiple replies
// so we are using parent referencing here
// so we are storing the id of the parent in the child
// so that we can easily get the parent by using the id
// so we are using the refPath here
// refPath is a dynamic reference to the model
// so we are using the onModel field to get the model name

const commentSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    onModel: {
      type: String,
      required: true,
      enum: ["Post", "Comment"],
    },
    commentable: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      refPath: "onModel",
    },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Like",
      },
    ],
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  { timestamps: true }
);

const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;
