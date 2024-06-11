'use strict'

//* --------------------------- *\\
//!   EXPRESSJS - TODO PROJECT  !\\
//* --------------------------- *\\

// npm i express dotenv
// npm i express-async-error // async func. error control
// npm install sequelize sqlite3


const express = require('express')
const app = express()

//^ catch async-error 
require('express-async-error')

require('dotenv').config()
const PORT = process.env?.PORT || 8000
const HOST = process.env?.HOST || '127.0.0.1'


//! json to obj and obj to json => yeri önemli yukarida olmali
app.use(express.json())

//! ROUTER
app.use(require('./src/routers/todoRouter.js'))

//! ERROR HANDLER
app.use(require('./src/middlewares/errorHandler.js'))

app.listen(PORT, () => console.log(`server running http://${HOST}:${PORT}`))

