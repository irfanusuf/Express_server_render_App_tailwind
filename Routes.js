const express = require("express");





// function
const registerUser = (req, res) => {
    const userName = req.body.name;
    const userEmail = req.body.email;
    const userPassword = req.body.password;
  
    res.json({
      success: true,
    });
  };


const router = express.Router();

//  routes 
router.route("/register").post(registerUser);
router.route("/product").delete(registerUser);

module.exports = router;
