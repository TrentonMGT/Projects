//Dependencies
var mongoose = require('mongoose');

//Mongoose Model
//User Schema
var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});

module.exports = {User};

