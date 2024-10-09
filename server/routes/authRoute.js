const express = require("express");
const { RegisterUser, LoginUser ,Hello} = require("../controller/authController");

const AuthRouter = express.Router();

AuthRouter.post("/register", RegisterUser);
AuthRouter.post("/login", LoginUser);

AuthRouter.get("/hello", Hello); 

module.exports = AuthRouter;
