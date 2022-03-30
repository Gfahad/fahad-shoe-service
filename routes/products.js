const mysql = require("mysql");
const express = require("express");
const router = express.Router();

/*
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "skylark_demo",
});
*/

const connection = mysql.createConnection({
  host: "us-cdbr-east-05.cleardb.net",
  user: "b6b5a00ef94b07",
  password: "da38826c",
  database: "heroku_57dd16fb33cc248",
});

connection.connect(function (err) {
  if (err) {
    return console.error("error: " + err.message);
  }

  console.log("Connected to the MySQL server.");
});

let products = [];

// connection.end(function (err) {
//   if (err) {
//     return console.log("error:" + err.message);
//   }
//   console.log("Close the database connection.");
// });
// const handleResult = (error, results, fields) => {
//   if (error) {
//     return console.error(error.message);
//   }
//   console.log(results);
//   products = results;
//   res.json(products);
// };
/* GET quotes listing. */
router.get("/", function (req, res, next) {
  const productsQuery = `SELECT * FROM products`;
  const handleResult = (error, results, fields) => {
    if (error) {
      return console.error(error.message);
    }
    console.log(results);
    // products = results;
    res.json(results);
  };

  connection.query(productsQuery, handleResult);

  // res.json(products);
});
module.exports = router;

