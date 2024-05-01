const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

// const dbConnect = require("./config/dbConnect");
const authenticated =require ("./auth/auth");
const cookieParser = require("cookie-parser");
const {connDbSQL} = require("./config/dbConnectSQL");
const { registerController, loginController } = require("./controllers/userController");

require("dotenv").config();
const port = process.env.PORT;


const app = express();
// dbConnect();
connDbSQL()
//middle wares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser())


//setting up the view engine


app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
// setting static files directory
app.use(express.static(path.join(__dirname, "public")));


//get routes 
app.get('/' ,(req,res)=>{res.send("hello World")} )

app.get('/home'  , (req,res)=>{res.render('home')})
app.get('/login' , (req,res)=>{res.render('login')})
app.get('/register', (req, res) => {res.render("register")});

app.get('/dashboard' , authenticated , (req,res)=>{res.render('dashboard')})

//post routes
app.post("/register", registerController);
app.post("/login", loginController);

app.listen(port, () => {
  console.log(`Server is Working on port: ${port}`);
});






