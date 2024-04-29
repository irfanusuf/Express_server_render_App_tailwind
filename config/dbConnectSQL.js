const sql = require("mysql");

const connection = sql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "testnode",
});


const connDb = () => {
  try {
    connection.connect((error )=>{
        if(error){
            console.log(error)
            return
        }
        console.log("Database connected on localhost MariaDB")
       

    });
  } catch (err) {
    console.log(err);
  }
};


module.exports = {connDb , connection}
