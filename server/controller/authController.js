const users = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// const GenerateUserName = async (username)=>{

// }

const RegisterUser = async (req, res, next) => {
  const { name, email, password } = req.body;
  try {
    const existingUser = await users.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ msg: "User already exists" });
    }

    if (!name || !email || !password) {
      return res.status(400).json({ msg: "Please fill all fields" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new users({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    return res.status(200).json({ msg: "User registered successfully" });
  } catch (error) {
    console.error(error);
    return next(error);
  }
};

const LoginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await users.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "User does not exist" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
      expiresIn: "7d",
    });
    return res.status(200).json({ token, msg: "User logged in successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Server Error" });
  }
};

const Hello = (req, res) => {
  res.send("Hello World");
};

module.exports = { RegisterUser, LoginUser, Hello };
