const mongoose = require("mongoose"); // Importing Mongoose to define and interact with MongoDB schemas.

// Defining the schema for posts.
const postSchema = new mongoose.Schema({
    title: {
        // The title of the post.
        type: String, // The type is a string to store textual titles.
        required: true, // The title field is mandatory.
    },
    body: {
        // The main content or body of the post.
        type: String, // The type is a string to store textual content.
        required: true, // The body field is mandatory.
    },
    likes: [{
        // An array to store references to "Like" documents.
        type: mongoose.Schema.Types.ObjectId, // Each element is an ObjectId referencing a Like document.
        ref: "Like", // References the Like model. Enables population to fetch full like details.
    }],
    comments: [{
        // An array to store references to "Comment" documents.
        type: mongoose.Schema.Types.ObjectId, // Each element is an ObjectId referencing a Comment document.
        ref: "Comment", // References the Comment model. Enables population to fetch full comment details.
    }]
});

// Exporting the Post model based on the schema.
// This model will interact with the "posts" collection in the database.
module.exports = mongoose.model("Post", postSchema);
