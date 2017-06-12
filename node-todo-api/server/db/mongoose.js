//-------Mongoose configuration file------------------
var mongoose = require('mongoose');

//Give the ability to use promises
mongoose.Promise = global.Promise;

//connecting
//This connection allow connection to mongolab or our local host
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};