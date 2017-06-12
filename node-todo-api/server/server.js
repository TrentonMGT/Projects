//Library imports@
//Parses JSON Data
const _ = require('lodash');
const bodyParser = require('body-parser');
//Helps with routing
const express = require('express');

//local imports@
const { mongoose } = require('./db/mongoose');
const { Todo } = require('./models/todo');
const { User } = require('./models/user');
const { ObjectID } = require('mongodb');

var app = express();
//Allow the web hosting company to use their connection post
const PORT = process.env.PORT || 3000;
//Build into node and allows me to run routes
var path = require('path');

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }));

//parse application/json take json turn it to an object 
//and pass it into the req and now JSON can be sent through 
//express
app.use(bodyParser.json());

//User id is the peram
app.get('/todos/:id', (req, res) => {
    var id = req.params.id;

    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }
    //find the id
    Todo.findById(id).then((todos) => {
        //validate id
        if (!todos) {
            return res.status(404).send();
        }
        //send result back if id is correct
        res.send({ todos });//the doc
    }).catch((error) => {
        res.status(400).send();
    });
});
//get all the todo and if an error
//send back a 404 req
app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({ todos });
    }, (error) => {
        res.status(400).send(error);
    })
});

app.post('/todos', (req, res) => {
    //Custructor Function that
    //takes and argument as a function
    //and access the properties in the Mongoose Model
    // console.log(req.body);
    var newTodo = new Todo({
        text: req.body.text
    });

    //Save the data to the database
    newTodo.save().then((doc) => {
        res.send(doc);
        // console.log('saved data', doc);
        console.log(JSON.stringify(doc, undefined, 2));
    }, (error) => {
        res.status(400).send(error);
    });
});

//delete todo route
app.delete('/todos/:id', (req, res) => {
    //grab the id
    var id = req.params.id;
    //check if the is not valid
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }
    //Remove the id
    //if the add is valid but is not in
    //the collection
    Todo.findByIdAndRemove(id).then((todos) => {
        if (!todos) {
            return res.status(404).send();
        }

        res.send({ todos });
    }).catch((e) => {
        res.status(400).send();
    });
});

//http patch method
//
app.patch('/todos/:id', (req, res) => {
    var id = req.params.id;
    var body = _.pick(req.body, ['text', 'completed']);

    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    if (_.isBoolean(body.completed) && body.completed) {
        body.completedAt = new Date().getTime();
    } else {
        body.completed = false;
        body.completedAt = null;
    }

    Todo.findByIdAndUpdate(id, { $set: body }, { new: true }).then((todo) => {
        if (!todo) {
            return res.status(404).send();
        }

        res.send({ todos });
    }).catch((e) => {
        res.status(400).send();
    })
});

app.listen(PORT, () => {
    console.log("App Listening on Port:" + PORT);
});

module.exports = { app };


