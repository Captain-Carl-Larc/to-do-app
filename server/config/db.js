//imports
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config(); // Load environment variables from .env file

//load the MongoDB URI from environment variables
const uri = process.env.MONGO_URI; 
const PORT = process.env.PORT || 3000;

//connect to mongodb
const connectDB = async () => {
    //console.log(uri)
    try {
      await mongoose.connect(uri);
      console.log(`MongoDB connected successfully at port ${PORT}`);
    } catch (error) {
      console.error("MongoDB connection failed:", error);
      process.exit(1); // Exit the process with failure
    }
  }

  module.exports = connectDB;