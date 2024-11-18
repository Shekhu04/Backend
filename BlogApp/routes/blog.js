// Import the express module
const express = require("express");

// Create a new router object using express.Router()
const router = express.Router();

const {createComment} = require("../controllers/CommentController")

router.post("/comments/create",createComment)

// Export the router object so it can be used in other parts of the application
module.exports = router;
