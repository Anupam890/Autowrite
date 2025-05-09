import express from "express";
import dotenv from "dotenv";
import connectDB from "./services/connectDB.js";
import auth from "./router/auth.route.js";
import cookieParser from "cookie-parser";
import session from "express-session";
import cors from "cors";

import insta from "./router/ai.route.js";
const app = express();

dotenv.config();

const port = process.env.port;
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use("/generate", insta);

//Routes
app.use("/auth", auth);

//test Route
app.get("/", (req, res) => {
  res.send("Server is running");
});

// DB Connection
connectDB()
  .then(() => console.log("MongoDB Connected"))
  .catch((error) => console.log(error.message));

app.listen(port, () => {
  console.log(`Server Running on ${port}`);
});
