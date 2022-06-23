DROP DATABASE IF EXISTS chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  user_id int NOT NULL AUTO_INCREMENT,
  username VARCHAR(255) NOT NULL,
  PRIMARY KEY (user_id)
);

CREATE TABLE rooms (
  room_id int NOT NULL AUTO_INCREMENT,
  roomname VARCHAR(255) NOT NULL,
  PRIMARY KEY (room_id)
);

CREATE TABLE messages (
  message_id int NOT NULL AUTO_INCREMENT,
  user_id int NOT NULL,
  user_message text NOT NULL,
  entered_on Date NOT NULL,
  room_id int NOT NULL,
  PRIMARY KEY (message_id)
);

CREATE TABLE friends (
  user_id int NOT NULL,
  friend_id int NOT NULL
);

/* Create other tables and define schemas for them here! */
ALTER TABLE messages ADD FOREIGN KEY (user_id) REFERENCES users(user_id);
ALTER TABLE messages ADD FOREIGN KEY (room_id) REFERENCES rooms(room_id);

ALTER TABLE friends ADD FOREIGN KEY (user_id) REFERENCES users(user_id);
ALTER TABLE friends ADD FOREIGN KEY (friend_id) REFERENCES users(user_id);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/


