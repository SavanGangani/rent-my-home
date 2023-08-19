const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        lowercase: true,
        unique: true,
        required: function () {
            return !this.phone;
        }
    },
    phone: {
        type: String,
        unique: true,
        required: function () {
            return !this.email;
        }
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('User', userSchema);