const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.status(404).send({
        error: 'Page not found',
        name: 'Todo app v0.0'
    });
});

app.get('/users', (req, res) => {
    res.status(200).send([
        {
            name: 'Trenton',
            age: '29'
        },
        {
            name: 'Vallesa',
            age: '29'
        }
    ]);
});

app.listen(3000, () => {
    console.log('Server is up on port 3000');
});

module.exports.app = app; 