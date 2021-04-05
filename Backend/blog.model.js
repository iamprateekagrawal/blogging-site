const mongoose = require('mongoose');

// Schema
const blog_schema = new mongoose.Schema({
    title: {
        type: String,
        required: true  
    },
    description: {
        type: String,
        required: true  
    },
    body: {
        type: String,
        required: true  
    },
    imgLink: String,
})

// Model - class - collection creation
const Blog = new mongoose.model("Blog", blog_schema);

module.exports = Blog;