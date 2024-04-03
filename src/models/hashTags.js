const mongoose = require("mongoose");

const hashTagSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true, 
    },
    posts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
      },
    ],
  },
  { timestamps: true }
);

const HashTag = mongoose.model("HashTag", hashTagSchema);
module.exports = HashTag;



// ** HashTag Model **
// ** every hashtag has a belonging post**
// ** every post has a belonging hashtag**  
// ** every post has a belonging comment**