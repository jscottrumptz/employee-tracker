// get the client
const mysql = require('mysql2');
 
// create the connection to database
const con = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '11Griffin55!!!',
    database: 'company_db'
});

con.promise().query("SELECT * employees")
  .then( ([rows,fields]) => {
    console.log(rows);
  })
  .catch(console.log)
  .then( () => con.end());