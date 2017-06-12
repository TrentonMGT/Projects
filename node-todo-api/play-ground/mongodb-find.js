//_________Inseting data into mondgodb______________

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

    //Show all doc from the todos collection--Select All
    db.collection('Todos').find().toArray().then((docs) => {
        console.log('Todos');
        //display all documents 
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    //Find specific values in todos collection--Query the database--Select from where
    db.collection('Todos').find({ competed: false }).toArray().then((docs) => {
        console.log('Todos');
        //display all documents 
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });
    //Find specific values in todos collection--Query the database--Select from where
    db.collection('Todos').find({
        _id: new ObjectID('5925ec71f6132b0cd3ab991e')
    }).toArray().then((docs) => {
        console.log('Todos');
        //display all documents 
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    //Find count doc in todos collection--Query the database--Select from where
    db.collection('Todos').find().count().then((count) => {
        console.log(`Todos count: ${count}`);
        //display all documents 
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    //Find specific values in todos collection--Query the database--Select from where
    db.collection('Users').find({ name: 'Trenton' }).toArray().then((docs) => {
        console.log('Todos');
        //display all documents 
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    //Count the amount of document with the specific value--Query the database--Count
    db.collection('Users').find({ name: 'Trenton' }).count().then((count) => {
        console.log('Todos');
        //display all documents 
        console.log(`You have ${count} with that name.`);
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });


});