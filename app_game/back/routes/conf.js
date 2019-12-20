const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "fabrilo72",
  database: "hackathon",
  timezone: "local",
  dateStrings: ["DATE", "DATETIME"]
});

module.exports = connection;
