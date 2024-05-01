const sql = require("mysql");

const connection = sql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "testnode",
});

const connDbSQL = () => {
  try {
    connection.connect((error, result) => {
      if (error) {
        console.log(error);
        return;
      }
      console.log("Database connected on localhost MariaDB");
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { connDbSQL, connection };
