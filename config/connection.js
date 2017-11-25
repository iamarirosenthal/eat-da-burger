var msql = require('mysql');

var connection;

if (process.env.herokudb_URL) {

  connection = mysql.CreateConnect ({
    port: 3306,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'burgers_db'
  })
}; 
