const mongoose = require("mongoose");
require("dotenv");

const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("connect success");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connection;
