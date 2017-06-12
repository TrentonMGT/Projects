var express = require('express');
var exphbs = require('express-handlebars');

// set up express server
var app = express();

// the engine is handlebars and the default layout is in 
// a file called 'main' 
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
//Setting the view engine to handlebars, because this will
//display the user view  
app.set('view engine', 'handlebars');

var PORT = 8080;
app.listen(PORT)

// Data sent to the array in the in icecream hndle
var icecreams = [
    { name: "vanilla", price: 10, awesomeness: 3 },
    { name: "chocolate", price: 4, awesomeness: 8 },
    { name: "banana", price: 1, awesomeness: 1 }
];

//Routes to the icecream file
app.get('/', function(req, res) {
    res.render('icecream', { ics: icecreams });
});

// set a paramater of name
app.get('/:name', function(req, res) {
	// loop through the icream array
	var i;
	var fastIce = icecreams.length;
    for (i = 0; i < fastIce; i ++) {
    	//if the array object name equals the paramater name
    	//send back the icecream object with that name
        if (icecreams[i].name == req.params.name) {
            return res.render('icecreams', icecreams[i]);
        }
    }
});
