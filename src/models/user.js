const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    username: {
      type: String,
    },
  },
  { timestamps: true }
);

// * writng a pre save hook to hash the password before saving it to the database
userSchema.pre("save", function (next) {
  const user = this;
  const SALT = bcrypt.genSaltSync(10);
  const encryptedPassword = bcrypt.hashSync(user.password, SALT);
  user.password = encryptedPassword;
  next();
});

const User = mongoose.model("User", userSchema);
module.exports = User;
