const connectDB = require("./config/db");
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;

//connect to MongoDB
connectDB().then(() => {
  // Start your server here, e.g.:
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});