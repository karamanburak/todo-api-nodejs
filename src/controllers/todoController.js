'use strict'

//* --------------------------- *\\
//! EXPRESSJS - TODO CONTROLLER  !\\
//* ---------------------------  *\\

const Todo = require('../models/todoModel.js')

//? CRUD operations
module.exports = {
    list: async (req, res) => {

        // const data = await Todo.findAll()

        const data = await Todo.findAndCountAll()
        res.status(200).send({
            error: false,
            data: data
        })
    },
    create: async (req, res) => {

        // const data = await Todo.create({
        //     title: "task 1",
        //     description: "description 1",
        //     priority: -1,
        //     isDone: true

        // })


        //? console.log(req.body);
        const data = await Todo.create(req.body)
        res.status(201).send({
            error: false,
            data: data
        })
    },
    get: async (req, res) => {

        // const data=  await Todo.findOne({where:{id:req.params.id}})
        const data = await Todo.findByPk(req.params.id)
        res.status(200).send({
            error: false,
            data: data
        })

    },
    update: async (req, res) => {

        let updatedDataBefore = await Todo.findByPk(req.params.id)
        const data = await Todo.update(req.body, { where: { id: req.params.id } })
        // const data=  await Todo.findOne(req.params.id})
        console.log(req);

        let updatedDataNext
        if (data == 1) {
            updatedDataNext = await Todo.findByPk(req.params.id)
        }
        res.status(201).send({
            error: false,
            data, // key value esit ise data:data seklinde yazmamiza gerek yok
            // body: req.body,
            updatedDataBefore,
            updatedDataNext

        })
    },

    delete: async (req, res) => {

        const data = await Todo.destroy({ where: { id: req.params.id } })
        console.log(data);

            res.status(204).send({
                error: false,
                data: data,
            })

    }

    //? bekleyen tasklar
    // getUnclosedTask:
}

