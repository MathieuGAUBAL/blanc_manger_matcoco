const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "matcoco",
  password: "Coco1985$",
  database: "hackathon",
  timezone: "local",
  dateStrings: ["DATE", "DATETIME"]
});

module.exports = connection;
