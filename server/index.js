const express = require("express");
const { connectDB } = require("./utils/connectDB");
const cors = require("cors");
const Authrouter = require("./routes/authRoute");
const {errorMiddleware} = require("./middleware/errorMiddleware");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(errorMiddleware);


const port = process.env.PORT || 8090;

// Routes

app.use("/api/auth", Authrouter);

// MongoDB Connection
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
