const { connection } = require("../config/dbConnectSQL");

const register = (req, res) => {
  try {
    const {id, username , email , password } = req.body
    const values = [id, username , email , password ]
    const Query = `INSERT INTO hello VALUES (?,?,?,?)`;

    connection.query(Query, values , (err, result) => {
      if (err) {
        console.log(err);
      }
        res.json(result)
      console.log(result);
    });
  } catch (err) {
    console.log(err);
  }
};


module.exports = register