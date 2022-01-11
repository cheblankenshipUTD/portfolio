const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, 'Please add a blog title'],
        unique: true,
        trim: true,
        maxlength: [40, "Title cannot be more than 40 chars"]
    },
    description: {
        type: String,
        required: true,
        maxlength: [200, "Description cannot be more than 200 chars"]
    },
    date: {
        type: Date,
        required: true,
    },
    tags: [{
        type: String,
        required: [true, "add tags to this post"]
    }],
    fileUrl: {
        type: String,
        required: [true, "Mark down url is required"],
        unique: true
    }
})


module.exports = mongoose.models.Blog || mongoose.model("Blog", BlogSchema);