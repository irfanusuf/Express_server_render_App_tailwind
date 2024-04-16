const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const {
  registerController,
  loginController,
} = require("./controllers/userController");
const dbConnect = require("./config/dbConnect");
const authenticated =require ("./auth/auth");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const port = process.env.PORT;


const app = express();
dbConnect();
//middle wares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser())
//setting up the engine
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, "public")));
//get routes 
app.get('/' ,(req,res)=>{res.send("hello World")} )
app.get('/login' , (req,res)=>{res.render('login')})
app.get("/register", (req, res) => {res.render("register")});
app.get('/home' , authenticated , (req,res)=>{res.render('home')})

//post routes
app.post("/register", registerController);
app.post("/login", loginController);

app.listen(port, () => {
  console.log(`Server is Working on port: ${port}`);
});




 // res.sendFile(path.join(__dirname + "/views/register.html"));

