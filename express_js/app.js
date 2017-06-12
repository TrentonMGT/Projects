 // Pakage global variables
 var express = require('express');
 var bodyParser = require('body-parser');
 var path = require('path');
 var expressValidator = require('express-validator');

 var app = express();
 /* Middleware are functions that has access to the request and other middleware */

 // var logger = function(req, res, next){
 // 	console.log('logging...');
 // 	next();
 // }

 // app.use(logger);


 //View Engine 
 //ejs standard html 
 app.set('view engine', 'ejs');
 app.set('views', path.join(__dirname, 'views'));

 //Body Parser Middleware
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: false }));


 //Set Static Path
 //This will render pages in the public folder
 app.use(express.static(path.join(__dirname, 'public')));

 
// Global Variables
app.use(function(res,next){
	res.locals.checkForUserInput = null;
	next();
})

 //Express Validator Middleware
 app.use(expressValidator({
     errorFormatter: function(param, msg, value) {
         var namespace = param.split('.'),
             root = namespace.shift(),
             formParam = root;

         while (namespace.length) {
             formParam += '[' + namespace.shift() + ']';
         }
         return {
             param: formParam,
             msg: msg,
             value: value
         };
     }
 }));

 var users = [{
     id: 1,
     firstName: 'John',
     lastName: 'Paul',
     email: 'joe@gmail.com'
 }, {
     id: 2,
     firstName: 'Peter',
     lastName: 'Paul',
     email: 'joe@gmail.com'
 }, {
     id: 3,
     firstName: 'Samuel',
     lastName: 'Paul',
     email: 'joe@gmail.com'
 }]

 //Handles Typing a url is summiting a get request
 // .../ is the root
 app.get('/', function(req, res) {
     res.render('index', {
         title: 'Customers',
         users: users
     });
 });
 // catch the submission for the player input
 app.post('/users/add', function(req, res) {

     req.checkBody('firstName', 'First Name is required ').notEmpty();
     req.checkBody('lastName', 'Last Name is required ').notEmpty();
     req.checkBody('email', 'Email is required ').notEmpty();

     var checkForUserInput = req.validationErrors();

     if (checkForUserInput) {
         //rerenders the form if their are any checkForUserInput
         res.render('index', {
             title: 'Customers',
             users: users,
             checkForUserInput: checkForUserInput
         });

     } else {
         var newUser = {
             firstName: req.body.firstName,
             lastName: req.body.lastName,
             email: req.body.email
         }

         console.log('Sucess');
     }

 });

 //Create a port to listen on.. This creates an express app
 app.listen(3000, function() {
     console.log('Server Started on port 3000...');
 });
