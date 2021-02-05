# CP4D Project 

 > Run the project start with server.js
 

## Installation

- install xampp to connect with MySQL database  

- create table at the database called (test) 
```bash
CREATE TABLE IF NOT EXISTS `customers` (
  id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  email varchar(255) NOT NULL,
  name varchar(255) NOT NULL,
  active BOOLEAN DEFAULT false
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
```
Download the the repo then at folder location run this command :

```bash
npm init
```

## start the project 

```
node server.js
```
