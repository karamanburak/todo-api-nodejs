# Todo Project with Sequelize
This project is a ToDo API built using Node.js and Sequelize. The API allows users to manage their to-do items, including creating, reading, updating, and deleting tasks.

## Features
- CRUD Operations: Full support for Create, Read, Update, and Delete operations for to-do items.
- Database Integration: Seamless integration with a relational database using Sequelize.
- Error Handling: Robust error handling and validation to ensure data integrity and provide meaningful feedback to users.
  
## Endpoints
### ToDo Management
- GET /todos: Retrieve all to-do items.
- GET /todos/
: Retrieve a specific to-do item by ID.
- POST /todos: Create a new to-do item.
- PUT /todos/
: Update an existing to-do item by ID.
- DELETE /todos/
: Delete a specific to-do item by ID.
### Technologies Used
- Node.js: JavaScript runtime built on Chrome's V8 JavaScript engine.
- Sequelize: Promise-based ORM for Node.js, supporting various SQL dialects.
- PostgreSQL: Relational database management system.
## Getting Started
### Prerequisites
- Node.js and npm installed on your local machine.
- PostgreSQL or another supported SQL database.


## Project Skeleton

```
- todo project (folder)
|
├── src
│    ├── configs
│    │     └── connectDB.js
│    ├── controllers
│    │     └── todoController.js
│    ├──  middlewares
│    │      └── errorHandler.js
│    ├── models
│    │     └── todoModel.js
│    └──  routers
│           └── todoRouter.js
├── env.sample
├── index.js
├── LICENSE
├── package-lock.json
├── package.json
└── README.md
```
