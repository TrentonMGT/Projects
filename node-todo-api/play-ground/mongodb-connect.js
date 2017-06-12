
// var MongoClient = require('mongodb').MongoClient;

//object destructering a es6 function
// var user = {name: 'Trenton', age: 25};
// var {name} = user;
// var {age} = user;
// console.log(`${name} ${age}`);
//--------------------------------------------------

//object deconstruction of Mongo pullin out the id
// const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();

// console.log(obj);
//--------------------------------------------------

// Connection url
var url = 'mongodb://localhost:27017/TodoApp';
// Connect using MongoClient
MongoClient.connect(url, (err, db) => {
    //error handler
    if (err) {
        return console.log('unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');


    // db.collection('Todos').insertOne({
    //     text: 'Homework',
    //     competed: false
    // }, (err, result) => {
    //     //error handler
    //     if (err) {
    //         return console.log('unable to insert todo', err);
    //     }
    //     //This will display the one document
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });
    //Close the database connection
//_id -12 stamp value the first 4 bit are a timestamp 3 bit are machine identifies
//2 bit process id another way to create a unique identifier 3 bit counter of random values
    console.log('Connected to MongoDB server');
    // db.collection('Users').insertOne({
    //     name: 'Trenton',
    //     age: 29,
    //     location: 'Georgia'
    // }, (err, result) => {
    //     //error handler
    //     if (err) {
    //         //add an error arg to my console.log
    //         return console.log('unable to insert User', err);
    //     }
    //     //This will display the one document
    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
    // });
    //Close the database connection

    db.close();
});