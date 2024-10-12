const express = require("express");
const { connectDB } = require("./utils/connectDB");
const cors = require("cors");
const Authrouter = require("./routes/authRoute");
const { errorMiddleware } = require("./middleware/errorMiddleware");
const dotenv = require("dotenv");
const passport = require("passport");
const session = require('express-session');
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(errorMiddleware);

app.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

const port = process.env.PORT || 3000;

app.use("/api/auth", Authrouter);


connectDB()
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
