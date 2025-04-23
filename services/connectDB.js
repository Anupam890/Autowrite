import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI;
    await mongoose.connect(uri);
  } catch (error) {
    console.log(`Error in DB connection: ${error}`);
  }
};

export default connectDB;
