import { Router } from "express";
import { instagram } from "../controllers/ai.controller.js";

const insta = Router();
insta.route("/instaCaption").post(instagram.instaCaption);


export default insta;