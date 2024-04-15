const mongoose = require("mongoose");

const url = "mongodb+srv://irfanusuf33:user_pwd@testcluster.a0pehai.mongodb.net/?retryWrites=true&w=majority&appName=testCluster";

const connectDb = async () => {
  try {
    await mongoose.connect(url);
    console.log("Db Connected on localServer");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDb;
