const mongoose = require("mongoose");

const url = "mongodb+srv://irfanusuf33:user_pwd@testcluster.a0pehai.mongodb.net/?retryWrites=true&w=majority&appName=testCluster";
//const url = "mongodb://localhost:27017"
const dbConnect = async () => {
  try {
    await mongoose.connect(url);
    console.log("Mongo Db Connected!");
  } catch (err) {
    console.log(err);
  }
};

module.exports = dbConnect;
