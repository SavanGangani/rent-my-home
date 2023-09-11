const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    uId: {
        type: String
        // required: true
    },
    name: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    area: {
        type: String,
        required: true
    },
    pincode: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    housetype: {
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
