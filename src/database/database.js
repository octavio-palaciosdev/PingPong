const mysql = require('mysql');

const dbConfig = {
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'admin123',
  database: 'PingPong',
};

const mysqlConnection = mysql.createConnection(dbConfig);

mysqlConnection.connect(async (err) => {
  if (err) {
    console.err(err);
  }
});

module.exports = { mysqlConnection };
