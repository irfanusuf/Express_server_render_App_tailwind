const jwt = require("jsonwebtoken");
require("dotenv").config();
const secretKey =  process.env.SECRET_KEY;

const authenticated = (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return res.status(401).render('login' , { message: "Unauthorized! kindly Login again!"});
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      if (err.name === "TokenExpiredError") {
        return res.status(401).render('login' , { message: "Session Expired! kindly Login again!" });
      }
      return res.status(403).render('login' , { message: "Forbidden! Some Server Error" });
    }

    req.userId = decoded.userId;
    next();
  });
};

module.exports = authenticated;

// app.get('/protected-route', authenticateToken, (req, res) => {
//     // Access userId from req.userId
//     res.send(`Welcome, user with ID: ${req.userId}`);
// });
