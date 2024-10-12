const express = require("express");
const passport = require("passport");
const { RegisterUser, LoginUser } = require("../controller/authController");

const AuthRouter = express.Router();

// Regular authentication routes
AuthRouter.post("/register", RegisterUser);
AuthRouter.post("/login", LoginUser);

// Google OAuth routes
AuthRouter.get("/google", 
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

AuthRouter.get("/auth/google/callback", 
  passport.authenticate('google', { failureRedirect: "/login" }),
  (req, res) => {
    res.redirect("/dashboard"); // Redirect after successful authentication
  }
);

module.exports = AuthRouter;
