const { connection } = require("../config/dbConnectSQL");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt")

const registerController = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashPass = await  bcrypt.hash(password , 10)
    const selectQuery = `SELECT  * FROM users WHERE email =?`;

    connection.query(selectQuery, [email], (selecterr, selectresult) => {
      if (selecterr) {
        console.log(selecterr);
        return;
      }
      console.log(selectresult);

      if (selectresult.length > 0) {
        res.render("register" , { message: "user already Exists!" });
      } else {
        const insertQuery = `INSERT INTO users VALUES (?,?,?,?)`;
        const id = uuidv4();
        const values = [id, username, email, hashPass];
        connection.query(insertQuery, values, (err, result) => {
          if (err) {
            console.log(err);
          }
          res.render("register",{ message: "User Created Succesfully" });
        });
      }
    });
  } catch (err) {
    console.log(err);
  }
};



const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;


    const callback = async (err, result) => {
      if (err) {
        console.log(err);
        res.render("login", { message: "Database Error" });
        return;
      }
      if (result.length > 0) {
        
        const comparePass = await bcrypt.compare(password, result[0].password);
        if(comparePass){
          const token = await jwt.sign({ userId: result[0].userId }, "thodfsoivjmnifu");

          res.cookie("token", token, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000,
            secure: true,
          });
          res.redirect('/dashboard')
        }
        else{
          res.render("login", { message: "Incorrect pass" });
        }
       
      }
      else{
        res.render("login", { message: "User not found" });
      }
    };




    

    if (email && password !== "") {
      const selectQuery = `SELECT * FROM users WHERE email = ?`;
      connection.query(selectQuery, [email] ,callback )
    } else {
      res.render("login", { message: "All credentials Required" });
    }
  } catch (error) {
    console.log(error);
  }
};









module.exports = {registerController , loginController};
