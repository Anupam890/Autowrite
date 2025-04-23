import User from "../models/userSchema.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { Strategy as GoogleStratergy } from "passport-google-oauth20";
import passport from "passport";

// Register Controller
const registration = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();

    return res.status(201).json({
      message: "User registration successful",
      user: {
        id: savedUser._id,
        name: savedUser.name,
        email: savedUser.email,
      },
    });
  } catch (error) {
    console.error("Registration error:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

// Login Controller
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(400).json({ message: "User does not exist" });
    }

    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: existingUser._id }, process.env.JWT_SECRET, {
      expiresIn: "30h",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 30 * 60 * 60 * 1000, // 30 hours
    });

    return res.status(200).json({
      message: "Login successful",
      user: {
        id: existingUser._id,
        name: existingUser.name,
        email: existingUser.email,
      },
      token,
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

// Placeholder for future email verification
const getVerifyEmail = async (req, res) => {
  res.status(200).json({ message: "Email verification endpoint coming soon!" });
};

//Third-party authentication Implementation
const googleSignIn = async (req, res, next) => {
  passport.use(
    new GoogleStratergy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK_URL,
      },
      function (accessToken, refreshToken, profile, cb) {
        console.log({ accessToken, profile });
        User.findOrCreate({ googleId: profile.id }, function (err, user) {
          if (err) return cb(err, null);
          if (!user) {
            let newUser = new User({
              name: profile.displayName,
              email: profile.emails[0].value,
              googleId: profile.id,
            });
            newUser.save();
            return cb(null, newUser);
          } else {
            return cb(null, user);
          }
        });
      }
    )
  );
};
// Serializer
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Deseralizer
passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

const authRoute = { registration, login, getVerifyEmail, googleSignIn };
export default authRoute;
