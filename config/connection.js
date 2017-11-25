var msql = require('mysql');

var connection;

if (process.env.burgers_db_URL) {

  connection = mysql.CreateConnect ({
    port: 3306,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'burgers_db'
  })
};

connection.connect(function(err){
  if (err) {
    console.error('ERROR: MySQL conneciton error -- ' + err.stack + '\n\n');
    return;
  }
  console.log('Connected to MySQL database as id ' connection.threadId + '\n\n');
});

module.exports = connection;
