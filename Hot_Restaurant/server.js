//Parses JSON Data
var bodyParser = require('body-parser');
//Help with routing
var express = require('express');
var app = express();
//Allow the web hosting company to use their connection post
var PORT = process.env.PORT || 8080;
//Build into node and allows me to run routes
var path = require('path');
  
// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json 
app.use(bodyParser.json());
 
//Includes the route files in the server using express
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

app.listen(PORT, function(){
	console.log("App Listening on Port:" + PORT);
});