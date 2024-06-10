'use strict'

// npm i express dotenv
// npm i express-async-error // async func. error control
// npm install sequelize sqlite3


const express = require('express')
const app = express()

require('dotenv').config()
const PORT = process.env?.PORT || 8000
const HOST = process.env?.HOST || '127.0.0.1'

app.all('/', (req, res) => {
    res.send('TODO API')
})

// app.use('/todo', (req,res) => { // TODO + ALL URL
//     res.send('TODO API')
// })

//! json to obj and obj to json
app.use(express.json())

//? express to DB connection

const { Sequelize, DataTypes } = require('sequelize')
const sequelize = new Sequelize('sqlite:./db.sqlite3') // (RDMS: adress)

//? Create MODEL
// const Todo = sequelize.define('table / model name', {'model details'})
const Todo = sequelize.define('todos', {

    // id field auto generated
    // id: {
    //     type: DataTypes.BIGINT,
    //     primaryKey: true,       // default false
    //     unique: true,           // default false
    //     autoIncrement: true,    // default false
    //     allowNull: false,        // default true
    //     comment: 'my comment',
    //     field: 'custom name',
    //     defaultValue: 'default value'
    // }

    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: DataTypes.TEXT, // just type
    priority: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 0       // -1:Low, 0:Normal, 1:High
    },
    isDone: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
    //! createdDate & updatedDate auto generated
    // createdDate:{type:DataTypes.DATE},

})

// sequelize.sync() //! run once
// sequelize.sync({ force: true }) //! DROP tables then CREATE tables
// sequelize.sync({ alter: true }) //! BACKUP DB then DROP tables then CREATE tables then RECOVERY


sequelize.authenticate() // connect to db
    .then(() => console.log('Todo DB connected')).catch(() => console.log('Todo DB NOT connected'))

// error control
const errorHandler = (err, req, res, next) => {
    const errorStatusCode = res?.errorStatusCode || 500
    res.status(errorStatusCode).send({
        error: true,
        status: false,
        message: err.message,
        // cause: err.cause,
        // stack: err.stack
    })
}

app.listen(PORT, () => console.log(`server running http://${HOST}:${PORT}`))

