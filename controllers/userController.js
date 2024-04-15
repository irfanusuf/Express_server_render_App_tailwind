const path = require("path");

const registerController = (req, res) => {
  const { username, email, password } = req.body;

  if (username && email && password !== "") {
    res.sendFile(path.resolve("views/login.html"));
  } else {
    res.json({ message: "All credentials Required " });
  }


};

const loginController = (req, res) => {
  console.log("hi heelo ");
};

module.exports = { registerController, loginController };
