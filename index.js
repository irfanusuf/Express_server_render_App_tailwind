const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const {
  registerController,
  loginController,
} = require("./controllers/userController");
const dbConnect = require("./config/dbConnect");

const app = express();

const port = 4000;

dbConnect();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, "public")));

app.get("/register", (req, res) => {

res.render("register");
  // res.sendFile(path.join(__dirname + "/views/register.html"));
});

app.post("/register", registerController);
app.post("/login", loginController);

app.listen(port, () => {
  console.log(`Server is Working on port: ${port}`);
});






