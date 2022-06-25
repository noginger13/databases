var mysql = require('mysql2');

const connection = mysql.createConnection({
  database: 'chat',
  user: 'root',
  password: '',
  host: '127.0.0.1',
});

connection.connect(function (err) {
  if (err) {
    return console.log(err);
  }
  console.log('Connected Successfully to Chatterbox DB');
});

module.exports = connection;




