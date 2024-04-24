const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const bcrypt = require("bcrypt")
require("dotenv").config();
const secretKey = process.env.SECRET_KEY


const registerController = async (req, res) => {
  const { username, email, password } = req.body;

  const user = await User.findOne({ email });
  const encryptPass =  await bcrypt.hash(password , 10)

  if (!user) {
    const newUser = await new User({ username, email, password : encryptPass  });
    const updateUser = await newUser.save();
    if (updateUser) {
      res.redirect('/login');  
    }
  } else {
    
    res.render('register', { message: 'User already exists' });
  }
};

const loginController = async (req, res) => {

 const {email ,password} = req.body
 let user = await User.findOne({email})


  if(user) {
      const verifyPass = await bcrypt.compare(password , user.password)
      if(verifyPass){
        const token = jwt.sign({userId : user._id }, secretKey)

      
        res.cookie('token', token, { 
          httpOnly: true,
          maxAge: 24*60*60*1000,   // milliseocnds
          //secure: true,     //https
      });

       res.render('home' , {username : user.username})
      }
      else{
        res.render('login' , {message :  "PassWord Incorrect!"})
      }
  }
  else{
    res.render('login' , {message :  "User not Found!"})
  }


};

module.exports = { registerController, loginController };
