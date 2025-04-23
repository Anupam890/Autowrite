import express from "express";
import dotenv from "dotenv";
import connectDB from "./services/connectDB.js";
import auth from "./router/auth.route.js";
import cookieParser from "cookie-parser";
import session from "express-session";
import cors from "cors";
import passport from "passport";
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
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 30 * 60 * 60 * 1000, // 30 hours
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use('/generate',insta);

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
