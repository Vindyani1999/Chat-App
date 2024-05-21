const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    requied: true,
    min: 3,
    max: 20,
    unique: true,
  },

  email: {
    type: String,
    requied: true,
    max: 500,
    unique: true,
  },

  password: {
    type: String,
    requied: true,
    min: 8,
  },

  isAvatarImageSet: {
    type: Boolean,
    default: false,
  },

  avatarImage: {
    type: String,
    default: "",
  },
});

module.exports = mongoose.model("Users", userSchema);
