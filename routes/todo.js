// Import the express module
const express = require("express");

// Create a new router object using express.Router()
const router = express.Router();

// Import the createTodo function from the createTodo controller
const { createTodo } = require("../controllers/createTodo");
const { getTodo,getTodoById } = require("../controllers/getTodo");
const {updateTodo} = require("../controllers/updateTodo")

// Define a POST route for creating a Todo
router.post("/createTodo", createTodo);
router.get("/getTodos", getTodo);
router.get("/getTodos/id",getTodoById);
router.put("/updateTodo/:id", updateTodo);

// Export the router object so it can be used in other parts of the application
module.exports = router;
