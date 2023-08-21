const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function (value) {
                // Check if the input is a valid email or phone number
                return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value) ||
                    /^[0-9]{10}$/.test(value);
            },
            message: 'Please enter a valid email address or phone number.'
        },
    },
    password: {
        type: String,
        required: true
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
