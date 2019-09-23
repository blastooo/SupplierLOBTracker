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
  supplierCode int NOT NULL,
  phone varchar(25) NOT NULL,
  email varchar(50) NOT NULL,
  website varchar(200) NOT NULL,
  address1 varchar(50) NOT NULL,
  address2 varchar(50),
  city varchar(20) NOT NULL,
  state varchar(20) NOT NULL,
  zip varchar(15) NOT NULL,
  PRIMARY KEY (id)
)ENGINE=INNODB;

DROP TABLE IF EXISTS `contracts`;

CREATE TABLE contracts (
  id int NOT NULL AUTO_INCREMENT,
  supplierId int NOT NULL,
  partNumber varchar(50) NOT NULL,
  nomenclature varchar(250) NOT NULL,
  contractDate datetime NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (supplierId) REFERENCES
  suppliers(id)
)ENGINE=INNODB;

DROP TABLE IF EXISTS `inventory`;

CREATE TABLE inventory (
  id int NOT NULL AUTO_INCREMENT,
  partNumber varchar(50) NOT NULL,
  qty int NOT NULL,
  PRIMARY KEY (id)
)ENGINE=INNODB;

DROP TABLE IF EXISTS `wip`;

CREATE TABLE wip (
  id int NOT NULL AUTO_INCREMENT,
  partNumber varchar(50) NOT NULL,
  qty int NOT NULL,
  PRIMARY KEY (id)
)ENGINE=INNODB;
