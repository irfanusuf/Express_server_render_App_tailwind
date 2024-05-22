const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors")
const xhbs = require("express-handlebars")

// const dbConnect = require("./config/dbConnect");
const {connDbSQL} = require("./config/dbConnectSQL");
// const connDBmsSQL = require("./config/dbConnectMSSQL");


const authenticated =require ("./auth/auth");
const cookieParser = require("cookie-parser");

const { registerController, loginController } = require("./controllers/userController");


require("dotenv").config();
const port = process.env.PORT;


const app = express();
// dbConnect();

connDbSQL()

// connDBmsSQL()

//middle wares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser())
app.use(cors())


//setting up the view engine


app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.engine ("hbs" , xhbs.engine({

  extname: "hbs",
  defaultLayout: "layout",
  layoutsDir: path.join(__dirname, "views", "layouts"),
  partialsDir: path.join(__dirname, "views" , "partials"),

}))





// setting static files directory
app.use(express.static(path.join(__dirname, "public")));


//get routes 
app.get('/' ,(req,res)=>{res.render("index" , {title : "Home"})})
app.get('/register', (req, res) => {res.render("register" , {title : "Register"})});
app.get('/login' , (req,res)=>{res.render('login' , {title : "Login"})})
app.get('/dashboard' , authenticated , (req,res)=>{res.render('dashboard', {title : "Dashboard"})})



// app.get('/home'  , (req,res)=>{res.render('home')})




//post routes
app.post("/register", registerController);
app.post("/login", loginController);

app.listen(port, () => {
  console.log(`Server is Working on port: ${port}`);
});






