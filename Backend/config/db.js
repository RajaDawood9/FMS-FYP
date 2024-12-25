require("dotenv").config();
const mongoose = require("mongoose");

const mongoURI = process.env.MONGO_URL;
mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
