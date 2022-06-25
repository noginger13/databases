var models = require('../models');
var db = require('../db');


module.exports = {
  get: function (req, res) {
    models.messages.getAll((err, data) => {
      if (err) {
        res.status(402).json('pay more money');
      } else {
        res.data = JSON.parse(JSON.stringify(data));
        console.log('Messages Sent!', res.data);
        res.status(201).json(res.data);
      }
    });
  }, // a function which handles a get request for all messages
  post: function (req, res) {
    //TODO: Get username, message text, & roomname off req
    var username = req.body.username;
    var message = req.body.message;
    var roomname = req.body.roomname;

    console.log({username, message, roomname});
    models.messages.create(username, message, roomname, (err, data) => {
      if (err) {
        res.status(402).json('pay more money');
      } else {
        console.log('New message created', data);
        res.status(201).json({data});
      }
    });
  }
};


//models.create(username, message, roomname, callback)
//   db.query(`SELECT USER_ID FROM USERS WHERE USERNAME="${username}"`, (err, result) => {
//     if (err) {
//       throw err;
//     } else {
//       if (result.length > 0) {
//         userID = result[0].USER_ID;
//         console.log('USERS USER ID', userID);
//       } else {
//         db.query(`INSERT INTO USERS (username) VALUES ("${username}")`, (err, result) => {
//           if (err) {
//             throw err;
//           } else {
//             console.log('RESULT ✅', 'USER ADDED');
//           }
//         });
//       }
//     }
//   });

//   db.query(`SELECT ROOM_ID FROM ROOMS WHERE ROOMNAME="${roomname}"`, (err, result) => {
//     if (err) {
//       throw err;
//     } else {
//       if (result.length > 0) {
//         roomID = result[0].ROOM_ID;
//         console.log('MESSAGES ROOM ID', roomID);
//       }
//       db.query(`INSERT INTO ROOMS (roomname) VALUES ("${roomname}")`, (err, result) => {
//         if (err) {
//           throw err;
//         } else {
//           console.log('RESULT ✅', 'ROOM ADDED');
//           models.messages.create(userID, username, message, roomID, roomname, (err, message) => {
//             if (err) {
//               return res.status(500).json('message: error posting message');
//             } else {
//               return res.status(200).json({message});
//             }
//           });
//         }
//       });
//     }
//   });
// }