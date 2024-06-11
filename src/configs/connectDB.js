'use strict'

//* --------------------------- *\\
//!   EXPRESSJS - CONNECT DB    !\\
//* --------------------------- *\\

//? express to DB connection
//https://sequelize.org/docs/v6/getting-started/

const { Sequelize, DataTypes } = require('sequelize')
require('dotenv').config()
const PSW = process.env?.PSW
const DB = process.env?.DB

let sequelize
if (DB === 'SQLITE') {
    //? DB connection string
    //! SQLITE
    sequelize = new Sequelize('sqlite:./db.sqlite3') // (RDMS: adress)

} else {
    //! POSTGRESQL
    // npm install--save pg pg - hstore
    // const sequelize = new Sequelize('postgres://USERNAME:PASSWORD@DOMAIN:5432/DBNAME')
    sequelize = new Sequelize(`postgres://userBk:${PSW}@127.0.0.1:5432/todo`)
}


sequelize.authenticate() // connect to db
    .then(() => console.log('Todo DB connected'))
    .catch(() => console.log('Todo DB NOT connected'))


module.exports = { sequelize, DataTypes }