const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");


const app = express();
const port = 3000


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.post('/register', registerUser = (req, res) => {
  const userName = req.body.name;
  const userEmail = req.body.email;
  const userPassword = req.body.password;
  res.json({sucess: true,});
});


app.get("/user", user = (req, res) => {
  res.send("no users found as there is no data base connected");
});


app.delete("/user", user = (req, res) => {
  res.send("when there are no users what will u deleted");
});

app.listen(port, () => {
  console.log(`Server is Working on port: ${port}`);
});
