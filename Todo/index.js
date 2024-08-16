// Import the express module to create the application
const express = require("express");

// Initialize the express application
const app = express();

// Load environment variables from a .env file into process.env
require("dotenv").config();

// Set the port number from an environment variable or default to 4000
const PORT = process.env.PORT || 4000;

// Middleware to parse incoming JSON requests
app.use(express.json());

// Import the routes for handling Todo operations from the todo route file
const todoRoutes = require("./routes/todo");

// Use the imported routes for any requests starting with /api/v1
app.use("/api/v1", todoRoutes);

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server started successfully at ${PORT}`);
});

// Import and invoke the function to connect to the database
const dbConnect = require("./config/database");
dbConnect();

// Define a simple GET route for the homepage
app.get("/", (req, res) => {
    res.send(`<h1> This is homepage <h1>`);
});
