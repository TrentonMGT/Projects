//Dependencies
var mongoose = require('mongoose');

//Mongoose Model
//Todo Schema
var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAT: {
        type: Number,
        //When a todo is not created the default should be null
        default: null
    }
});

module.exports = {Todo};