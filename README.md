# PingPong win tracking system

_This project as the title says, allows ping pong players to keep track of winned games_

## Start-up 🚀

_This instructions will allow you to get the project going for developing and test purposes._

### Pre-requisites 📋

You will need:

* Node.js
* npm
* Mysql

### Instalation 🔧

**Database**

There is a dbDump.sql file that will contain the script to create the database.
Additionaly you will have to configure the database.js file with your credentials.
 ``` 
 host: 'localhost',
 port: 3306,
 user: '',//edit
 password: '',//edit
 database: 'PingPong',
  ```
This is what you will find under this file.


Once you fulfill the pre-requisites and set up the database all you need is to do a simple.
```
npm install 
npm run dev
```
## First steps

You can go to localhost:3000 in your browser, that will load up the main screen for the project.

## Tests ⚙️
To run tests, you must close the server (CTRL + C)
After that, run the below command 
```
npm test
```

## Built with 🛠️
* [Node](https://nodejs.org/en/) - backend
* [express](https://expressjs.com/es/) - express
* [mysql](https://www.mysql.com/) - Database


## Author ✒️

* **Octavio Palacios ** - [octavioPalaciosDev](https://github.com/octaviopalacioscodanai/)

## License 📄

This is under MIT open source license

## Thanks to 🎁

* Arvolution, for the oportunity to show my skills.

