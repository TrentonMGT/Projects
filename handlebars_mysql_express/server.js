var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');
var mysql = require('mysql');


// set up express server
var app = express();
// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }));

///need to know

app.use(methodOverride('_method'));
// the engine is handlebars and the default layout is in 
// a file called 'main' 
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
//Setting the view engine to handlebars, because this will
//display the user view  
app.set('view engine', 'handlebars');

var PORT = 8080;
app.listen(PORT);

//mysql connection
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "localhost123",
    database: "movie_planner_DB"
});
//Test connection
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

//Express route that will POST layout index to the page
app.get('/', function(req,res){
	//Query the database
	connection.query('SELECT * FROM movies;',function(err,data){
		//index the object movies with the data object 
		res.render('index',{movies:data});

	});
});

//Express route that will GET the information from the from
//and insert it into a database
app.post('/create', function(req,res){
	//Query the database and put the data from the form inplace of the
	//values ?
	connection.query('INSERT INTO movies (movies) VALUES (?);',[req.body.movies]
		, function(err,data){
		if(err)throw err;
		//redirect to the home page when data is tucked into 
		//the database 
		res.redirect('/');
	});
});

//This is triggered by the put method on the main page
app.put('/update',function(req,res){
	//Update query to mysql
	connection.query('UPDATE movies SET movies = ? WHERE id = ?;',[req.body.movies, req.body.id],function(err,data){
		if(err)throw err;
		//redirect to the home page when data is tucked into 
		//the database 
		res.redirect('/');
	});
});

//This is triggered by the delete method on the main page
app.delete("/:id", function(req, res) {
	//Delete query to mysql
  connection.query("DELETE FROM movies WHERE id = ?", [req.params.id], function(err, result) {
    if (err) {
      throw err;
    }
    res.redirect("/");
  });
});


