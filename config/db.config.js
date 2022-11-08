
// Require module SQl
// const mysql  = require('mysql'); 
// let connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : 'rootroot',
//   database : 'livreOr'
// });
 
// connection.connect();
// module.exports = connection

module.exports = {
  HOST: "localhost",
  USER: "tatianasimmer",
  PASSWORD: "password",
  DB: "livreor",
  DATABASE_URL: "",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};