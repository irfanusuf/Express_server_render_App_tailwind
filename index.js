const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const {registerController , 
  loginController} = require("./controllers/userController");
const connectDb = require("./config/dbConnect");


const app = express();

const port = 4000

connectDb()


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/register.html"));
});


app.post("/register" , registerController)
app.post("/login" , loginController)

app.listen(port, () => {
  console.log(`Server is Working on port: ${port}`);
});










// app.post('/register', registerUser = (req, res) => {



//   const userName = req.body.name;
//   const userEmail = req.body.email;
//   const userPassword = req.body.password;
//   res.json({sucess: true,});
//   res.sendFile(path.join(__dirname + "/index.html"));
// });




// app.get("/user", user = (req, res) => {
//   res.send("no users found as there is no data base connected");
// });


// app.delete("/deleteUser", user = (req, res) => {
//   res.send("when there are no users what will u deleted");
// });

