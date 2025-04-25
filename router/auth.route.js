import { application, Router } from "express";
import authRoute from "../controllers/auth.controller.js";


const auth = Router();

auth.route("/register").post(authRoute.registration);
auth.route("/login").post(authRoute.login);
auth.route("/google").get(authRoute.googleAuth);
auth.route("/auth/callback").get(authRoute.googleCallback);

export default auth;
