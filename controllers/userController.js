const User = require("../models/userModel");
const bcrypt = require("bcrypt")


const registerController = async (req, res) => {
  const { username, email, password } = req.body;

  const user = await User.findOne({ email });
  const encryptPass =  await bcrypt.hash(password , 10)

  if (!user) {
    const newUser = await new User({ username, email, password : encryptPass  });
    const updateUser = await newUser.save();
    if (updateUser) {
      res.render('home')
    }
  } else {
    
    res.render('register', { message: 'User already exists' });
  }
};

const loginController = (req, res) => {
  console.log("hi heelo ");
};

module.exports = { registerController, loginController };
