const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    contact: {
        type: Number,
        minlength: 10,
        maxlength: 10,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    bedroom: {
        type: Number,
        required: true
    },
    bathroom: {
        type: Number,
        required: true
    },
    parking: {
        type: Number,
        required: true
    },
    garden: {
        type: Number,
        required: true
    },
    rent: {
        type: Number,
        required: true
    },
    title: {
        type: String,
    },
    description: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Post', postSchema);
