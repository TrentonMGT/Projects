var Sequelize = require('sequelize');

var connection = new Sequelize('demo_schema', 'root', 'localhost123');

var Article = connection.define('article', {
    title: Sequelize.STRING,
    body: Sequelize.TEXT
});

connection.sync().then(function () {
    Article.findAll().then(function (articles) {
        console.log(articles.length);
    });
});