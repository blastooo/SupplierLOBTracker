/*  Execute this file from the command line by typing:
 *    mysql -u root -p < database-mysql/pure-sql/schema.sql
 *  to create the database and the tables.*/

DROP DATABASE IF EXISTS lob;

CREATE DATABASE lob;

USE lob;

DROP TABLE IF EXISTS `suppliers`;

CREATE TABLE suppliers (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  description varchar(250) NOT NULL,
  mainPhotoUrl varchar(200) NOT NULL,
  phone varchar(25) NOT NULL,
  email varchar(50) NOT NULL,
  website varchar(200) NOT NULL,
  suggestedDuration varchar(20) NOT NULL,
  featuredIn varchar(50) NOT NULL,
  address1 varchar(50) NOT NULL,
  address2 varchar(50) NOT NULL,
  city varchar(20) NOT NULL,
  state varchar(20) NOT NULL,
  zip varchar(15) NOT NULL,
  lat float NOT NULL,
  lng float NOT NULL,
  category varchar(30) NOT NULL,
  PRIMARY KEY (id)
)ENGINE=INNODB;

DROP TABLE IF EXISTS `contracts`;

CREATE TABLE contracts (
  id int NOT NULL AUTO_INCREMENT,
  userName varchar(50) NOT NULL,
  profilePicture varchar(250) NOT NULL,
  memberSince datetime NOT NULL,
  location varchar(50) NOT NULL,
  PRIMARY KEY (id)
)ENGINE=INNODB;

DROP TABLE IF EXISTS `demand`;

CREATE TABLE demand (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  description varchar(250) NOT NULL,
  mainPhotoUrl varchar(200) NOT NULL,
  phone varchar(25) NOT NULL,
  email varchar(50) NOT NULL,
  website varchar(200) NOT NULL,
  suggestedDuration varchar(20) NOT NULL,
  featuredIn varchar(50) NOT NULL,
  address1 varchar(50) NOT NULL,
  address2 varchar(50) NOT NULL,
  city varchar(20) NOT NULL,
  state varchar(20) NOT NULL,
  zip varchar(15) NOT NULL,
  lat float NOT NULL,
  lng float NOT NULL,
  category varchar(30) NOT NULL,
  PRIMARY KEY (id)
)ENGINE=INNODB;

DROP TABLE IF EXISTS `inventory`;

CREATE TABLE inventory (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  description varchar(250) NOT NULL,
  mainPhotoUrl varchar(200) NOT NULL,
  phone varchar(25) NOT NULL,
  email varchar(50) NOT NULL,
  website varchar(200) NOT NULL,
  suggestedDuration varchar(20) NOT NULL,
  featuredIn varchar(50) NOT NULL,
  address1 varchar(50) NOT NULL,
  address2 varchar(50) NOT NULL,
  city varchar(20) NOT NULL,
  state varchar(20) NOT NULL,
  zip varchar(15) NOT NULL,
  lat float NOT NULL,
  lng float NOT NULL,
  category varchar(30) NOT NULL,
  PRIMARY KEY (id)
)ENGINE=INNODB;

DROP TABLE IF EXISTS `wip`;

CREATE TABLE wip (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  description varchar(250) NOT NULL,
  mainPhotoUrl varchar(200) NOT NULL,
  phone varchar(25) NOT NULL,
  email varchar(50) NOT NULL,
  website varchar(200) NOT NULL,
  suggestedDuration varchar(20) NOT NULL,
  featuredIn varchar(50) NOT NULL,
  address1 varchar(50) NOT NULL,
  address2 varchar(50) NOT NULL,
  city varchar(20) NOT NULL,
  state varchar(20) NOT NULL,
  zip varchar(15) NOT NULL,
  lat float NOT NULL,
  lng float NOT NULL,
  category varchar(30) NOT NULL,
  PRIMARY KEY (id)
)ENGINE=INNODB;
