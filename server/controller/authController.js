const users = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
// const GenerateUserName = async (username)=>{

// }

const RegisterUser = async (req, res, next) => {
  const { name, email, password } = req.body;
  try {
    const existingUser = await users.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ msg: "User already exists" });
    }

    if (!name || !email || !password) {
      return res.status(400).json({ msg: "Please fill all fields" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new users({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    return res.status(200).json({ msg: "User registered successfully" });
  } catch (error) {
    console.error(error);
    return next(error);
  }
};

const LoginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await users.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "User does not exist" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
      expiresIn: "7d",
    });
    return res.status(200).json({ token, msg: "User logged in successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Server Error" });
  }
};

const Hello = (req, res) => {
  res.send("Hello World");
};

passport.use(
  new GoogleStrategy({
    clientID: "845882649223-7on3e7v1stmgsbl3m8u43hp030vik7f3.apps.googleusercontent.com",
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/callback"
  },
  (accessToken, refreshToken, profile, done) => {
    
    return done(null, profile);
  })
);


passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

module.exports = { RegisterUser, LoginUser, Hello };
