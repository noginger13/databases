var db = require('../db');

module.exports = {
  getAll: function () {

  },
  create: function (username, callback) {
    db.query(`SELECT USERNAME FROM USERS WHERE USERNAME="${username}"`, (err, result) => {
      if (err) {
        throw err;
      } else {
        if (result.length > 0) {
          userID = result[0].USERNAME;
          console.log('USERS USERNAME', userID);
          callback(null, userID);
        } else {
          db.query(`INSERT INTO USERS (username) VALUES ("${username}")`, (err, result) => {
            if (err) {
              throw err;
            } else {
              console.log('RESULT ✅', 'USER ADDED');
            }
          });
        }
      }
    });
  }
};


// db.query(`SELECT USER_ID FROM USERS WHERE USERNAME="${username}"`, (err, result) => {
//   if (err) {
//     throw err;
//   } else {
//     if (result.length > 0) {
//       userID = result[0].USER_ID;
//       console.log('USERS USER ID', userID);
//     } else {
//       db.query(`INSERT INTO USERS (username) VALUES ("${username}")`, (err, result) => {
//         if (err) {
//           throw err;
//         } else {
//           console.log('RESULT ✅', 'USER ADDED');
//         }
//       });
//     }
//   }
// });