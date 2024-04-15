const mongoose = require("mongoose");

const url = "mongodb://localhost:27017/expressHtml";

const connectDb = async () => {
  try {
    await mongoose.connect(url);
    console.log("Db Connected on localServer");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDb;
