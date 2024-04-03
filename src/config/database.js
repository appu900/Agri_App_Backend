const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    await mongoose.connect("mongodb://localhost/agri_app_backend");
    console.log("Connected to database");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = connectToDatabase;


