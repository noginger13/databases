var models = require('../models');
var db = require('../db');

module.exports = {
  get: function (req, res) {},
  post: function (req, res) {
    var username = req.body.username;
    console.log(req.body);
    console.log("no body, just name", req.name);
    var userID = null;

    models.users.create(username, (err, created) => {
      if (err) {
        res.status(402).json('pay more money');
      } else {
        console.log('New user created', created);
        res.status(201).json({created});
      }
    });
  }
};


// db.promise().query(`SELECT USER_ID FROM USERS WHERE USERNAME="${username}"`).then((userID) => {
// res.status(200).json({user});
//   userID = Buffer.from(userID).toString();
//   console.log(userID);
// })

// var getUserID = promiseDBquery();
// // .catch (err) {
// models.users.create(user, (err, message) => {
//   if (err) {
//   } else {
//   }
// });
// }
// //   console.log('can'query);
// // };

// console.log("getUserID", getUserID);

//   var user = req.body.username;

//   let getUserID = await new Promise ((data, err) => {
//     db.query(`SELECT USER_ID FROM USERS WHERE USERNAME="${user}"`, (err, result) => {
//       if (err) {
//         throw err;
//       } else {
//         if (result.length > 0) {
//           userID = result[0].USER_ID;
//           console.log('USERS USER ID', userID);
//         } else {
//           console.log('thing');
//         }
//       }
//     });
//   });
