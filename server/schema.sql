DROP DATABASE IF EXISTS chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  username VARCHAR(255) NOT NULL,
  PRIMARY KEY (username)
);

-- CREATE TABLE rooms (
--   roomname VARCHAR(255) NOT NULL,
--   PRIMARY KEY (roomname)
-- );

CREATE TABLE messages (
  message_id int NOT NULL AUTO_INCREMENT,
  username VARCHAR(255) NOT NULL,
  user_message text NOT NULL,
  roomname VARCHAR(255) NOT NULL,
  PRIMARY KEY (message_id)
);

/* Create other tables and define schemas for them here! */
ALTER TABLE messages ADD FOREIGN KEY (username) REFERENCES users(username);
-- ALTER TABLE messages ADD FOREIGN KEY (roomname) REFERENCES rooms(roomname);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/


