const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    if (connection.STATES.connected) {
      console.log("Mongodb connected");
    } else {
      console.log("Mongodb connection failed");
    }
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { connectDB };
