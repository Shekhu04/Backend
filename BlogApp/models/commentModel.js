const mongoose = require("mongoose"); // Importing Mongoose to interact with MongoDB.

// Defining the schema for comments.
const commentSchema = new mongoose.Schema({
    posts: {
        // A reference to the Post model, linking the comment to a specific post.
        type: mongoose.Schema.Types.ObjectId, // This stores the ID of a Post document in MongoDB.
        ref: "Post", // References the Post model. Mongoose will use this to populate the related post data.
    },
    user: {
        // The user who created the comment.
        type: String, // Stores the username or ID of the user.
        required: true, // Makes the user field mandatory.
    },
    body: {
        // The content of the comment.
        type: String, // Stores the actual comment text.
        required: true, // Makes the body field mandatory.
    }
});

// Exporting the Comment model based on the schema.
// This model will be used to interact with the "comments" collection in the database.
module.exports = mongoose.model("Comment", commentSchema);
