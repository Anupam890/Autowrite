import User from "../models/userSchema.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import * as artic from "arctic";
import { google } from "../services/google.js";

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
      maxAge: 30 * 60 * 60 * 1000,
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

const googleAuth = async (req, res) => {
  if (req.user) return res.redirect("/");

  const state = artic.generateState();
  const codeVerifier = artic.generateCodeVerifier();

  const COOKIE_CONFIG = {
    httpOnly: true,
    secure: true,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    sameSite: "lax",
  };

  res.cookie("google_state", state, COOKIE_CONFIG);
  res.cookie("google_code_verifier", codeVerifier, COOKIE_CONFIG);

  const url = google.createAuthorizationURL(state, codeVerifier, [
    "openid",
    "email",
    "profile",
  ]);

  return res.redirect(url);
};
const googleCallback = async (req, res) => {
  const { code, state } = req.query;
  console.log(code, state);
  const { google_state: storedState, google_code_verifier: codeverifier } =
    req.cookies;

  if (!code || !state || !storedState || !codeverifier) {
    return res.status(400).json({ message: "Invalid request" });
  }

  let tokens;
  try {
     tokens = await google.validateAuthorizationCode(code,codeverifier);
  } catch (error) {
    console.error("Error exchanging code for tokens:", error);
    return res.status(500).json({ message: "Server error" });
    
  }
  const claims = decodeIdToens(tokens.idToken);
  const { sub: googleId, email, name } = claims;

  let user = await getUserWithOauthId({
    provider:'google',
    email
  })
};

const authRoute = { googleCallback, registration, login, googleAuth };
export default authRoute;
