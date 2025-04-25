import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    token: String,
    isVerified: {
      type: Boolean,
      default: false,
    },
    avatar: {
      type: String,
      default:
        "https://res.cloudinary.com/dqj0v1x4g/image/upload/v1698236482/avatars/default-avatar.png",
    },
    subscription: {
      type: String,
      enum: ["free", "pro"],
      default: "free",
    },
    googleAccountId: {
      type: String,
      default: null,
    },
    provider: {
      type: String,
      enum: ["local", "google"],
      default: "local",
    },
  },
  { timestamps: true }
);
const User = mongoose.model("User", userSchema);

export default User;
