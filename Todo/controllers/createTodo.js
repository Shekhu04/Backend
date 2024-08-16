// Import the Todo model
const Todo = require("../models/Todo");

// Controller function to handle creating a new Todo entry
exports.createTodo = async (req, res) => {
    try {
        // Extract the title and description from the request body
        const { title, description } = req.body;

        // Create a new Todo entry in the database using the extracted title and description
        const response = await Todo.create({ title, description });

        // If the creation is successful, send a success response with the created data
        res.status(200).json({
            success: true,               // Indicates the operation was successful
            data: response,              // Contains the created Todo entry
            message: "Entry created successfully"  // A message confirming the operation
        });

    } catch (err) {
        // If an error occurs, log the error to the console
        console.error(err);
        console.log(err);

        // Send a response with a 500 status code indicating an internal server error
        res.status(500).json({
            success: false,              // Indicates the operation failed
            data: "internal server error", // A placeholder message for the failure
            message: err.message,        // Provides the actual error message for debugging
        });
    }
}
