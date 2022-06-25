var db = require('../db');

module.exports = {
  getAll: function (callback) {
    db.query('SELECT * FROM MESSAGES', [], (err, result) => {
      if (err) {
        throw err;
      } else {
        console.log(result);
        callback(null, result);
      }
    });
  }, // a function which produces all the messages
  create: function (username, message, roomname, callback) {
    console.log("INSIDE MODEL CREATE");
    db.query(`INSERT INTO MESSAGES (username, user_message, roomname) VALUES ("${username}", "${message}", "${roomname}")`, (err, result) => {
      if (err) {
        throw err;
      } else {
        callback(null, message);
      }
    });
  }
// a function which can be used to insert a message into the database
};
