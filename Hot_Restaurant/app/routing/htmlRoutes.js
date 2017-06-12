var path = require('path');

module.exports = function(app) {

    //When the user hit the url tables show them table.html
    app.get('/tables', function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/tables.html'));
    });

    //When the user hit the url reserve show them reserve.html
    app.get('/reserve', function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/reserve.html'));
    });

   //When the user hit any url on my page other then reserve or table 
   //sent them to the home page
    app.use(function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/home.html'));
    });
}
