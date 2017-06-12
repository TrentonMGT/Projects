var db = require('./db.js')

module.exports.handleSignup = (email, password) => {
    //checks if email already exists
    //Save the user to the database with ES6 syntax
    db.saveUser({email,password});
    //Send the welcome email
}