//Delete data into mondgodb______________

// var MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

// Connection url
var url = 'mongodb://localhost:27017/TodoApp';
// Connect using MongoClient
MongoClient.connect(url, (err, db) => {
    //error handler
    if (err) {
        return console.log('unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');


    // //deleteMany 
    // db.collection('Todos').deleteMany({ text: 'Go for a jog' }).then((result) => {
    //     console.log('Todos');
    //     //display all documents 
    //     console.log(result);
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });
    //deleteOne
    // db.collection('Todos').deleteOne({ text: ' Bath the dog ' }).then((result) => {
    //     console.log('deleteOne Todos');
    //     //display all documents 
    //     console.log(result);
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });
    //findOneAndDelete --- Remove a single item and returns the value
    db.collection('Todos').findOneAndDelete({ age: 1 }).then((result) => {
        // console.log(`findOneAndDelete Todos`);
        console.log(result);
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });
    // db.close();

});