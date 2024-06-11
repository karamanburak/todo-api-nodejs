'use strict'

//* --------------------------- *\\
//!   EXPRESSJS - CONNECT DB    !\\
//* --------------------------- *\\

//? express to DB connection
//https://sequelize.org/docs/v6/getting-started/

const { Sequelize, DataTypes } = require('sequelize')

//? DB connection string
//! SQLITE
// const sequelize = new Sequelize('sqlite:./db.sqlite3') // (RDMS: adress)

//! POSTGRESQL
// npm install--save pg pg - hstore
// const sequelize = new Sequelize('postgres://USERNAME:PASSWORD@DOMAIN:5432/DBNAME')
const sequelize = new Sequelize('postgres://userBk:11@localhost:5432/todo')


sequelize.authenticate() // connect to db
    .then(() => console.log('Todo DB connected'))
    .catch(() => console.log('Todo DB NOT connected'))


module.exports = { sequelize, DataTypes }