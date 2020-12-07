const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "159$",
  database: "cadastro"
});

connection.connect(err => {
  if (err) {
    console.log(err);
  } else {
    console.log("Conectado");
  }
});

module.exports = connection;
