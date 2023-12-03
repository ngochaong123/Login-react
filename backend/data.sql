CREATE DATABASE Account;
USE Account;

CREATE TABLE Login (
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);
INSERT INTO Login VALUES ("user@gmail.com","123");