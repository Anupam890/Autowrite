const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // eslint-disable-next-line no-undef
    await mongoose.connect(process.env.MONGO_URL);
  } catch (error) {
    console.error(error);
  }
};

module.exports =  { connectDB };
