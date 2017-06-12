var tableData = require('../data/tableData.js');
var waitingListData = require('../data/waitingListData.js');

//app represents express which was named in the server.js file
module.exports = function(app) {

    //get and diplay the table data in json format 
    app.get('/api/tables', function(req, res) {
        res.json(tableData);
    });

    //get and diplay the table data in json format 
    app.get('/api/waitList', function(req, res) {
        res.json(waitingListData);
    });

    //get and diplay the table data in json format 
    app.post('/api/tables', function(req, res) {
    	//if the tables are empty send data witha 
    	//limit of 5 to the table dataData array
        if (tableData.length < 5) {
        	tableData.push(req.body);
        	res.json(true);
        }else{
         //if the tables are empty send data witha 
    	//limit of 5 to the table dataData array
        	waitingListData.push(req.body);
        	res.json(false);
        }
    });

    //clear out all the tables arrays
    app.post('/api/clear', function(req, res) {
       tableData = [];
       waitingListData = [];

       console.log(tableData);
       console.log(waitingListData);
    });
}
