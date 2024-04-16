const mongoose = require("mongoose");
require("dotenv").config();

const url = process.env.MONGO_URI
const dbConnect = async () => {
  try {
    await mongoose.connect(url);
    console.log(`Mongo Db Connected on ${url}`);
  } catch (err) {
    console.log(err);
  }
};

module.exports = dbConnect;
