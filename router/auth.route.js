import { application, Router } from "express";
import authRoute from "../controllers/auth.controller.js";
import passport from "passport";

const auth = Router();

auth.route("/register").post(authRoute.registration);
auth.route("/login").post(authRoute.login);
auth.route("/verify-email").get(authRoute.getVerifyEmail);

export default auth;
