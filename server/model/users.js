const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required:true
    },
    status: {
        type: String,
        default: 'inactive'
    }
});

module.exports = mongoose.model('userModel', userSchema);