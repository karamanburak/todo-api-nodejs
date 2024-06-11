'use strict'

//* --------------------------- *\\
//!   EXPRESSJS - TODO ROUTER   !\\
//* --------------------------- *\\


const router = require('express').Router()
const todo = require('../controllers/todoController')


//* Routing 1. way
//^ LIST todos (all)
// router.get('/todos', todo.list)

//^ CREATE todo
// router.post('/todos', todo.create)

//^ READ todo with id
// router.get('/todos/:id', todo.get)

//^ UPDATE todo
// router.put('/todos/:id', todo.update)

//^ DELETE todo
// router.delete('/todos/:id', todo.delete)


//* Routing 2. way => short & useable
router.route('/todos')
    .get(todo.list)
    .post(todo.create)

router.route('/todos/:id')
    .get(todo.get)
    .put(todo.update)
    .patch(todo.update)
    .delete(todo.delete)



// app.use(router)

module.exports = router


// app.all('/', (req, res) => {
//     res.send('TODO API')
// })

// app.use('/todo', (req,res) => { // TODO + ALL URL
//     res.send('TODO API')
// })