'use strict'

//* --------------------------- *\\
//!   EXPRESSJS - CONNECT DB    !\\
//* --------------------------- *\\

//? express to DB connection
//https://sequelize.org/docs/v6/getting-started/

const { Sequelize, DataTypes } = require('sequelize')
const sequelize = new Sequelize('sqlite:./db.sqlite3') // (RDMS: adress)

module.exports = { sequelize, DataTypes }