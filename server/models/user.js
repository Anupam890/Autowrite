const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    username: {
        type: String,
        sparse: true, 
      },
    name: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    googleId: {
      type: String,
    },
    isLoggedIn:{
        type: Boolean,
        default: false,
    }
  },
  { timestamps: true }
);
const users = mongoose.model("users", userSchema);

module.exports = users;
