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


    // //findOneAndUpdate
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5925ec71f6132b0cd3ab991e')
    // }, {
    //         $set: {
    //             completed: true
    //         }
    //     }, {
    //         returnOriginal: false
    //     }).then((result) => {
    //         console.log('Todos');
    //         //display all documents 
    //         console.log(result);
    //     }, (err) => {
    //         console.log('Unable to fetch todos', err);
    //     });

    //update
    // db.collection('Todos').update({}, {
    //         $rename: {
    //             'competed': 'completed'
    //         }
    
    //     }).then((result) => {
    //         console.log('Todos');
    //         //display all documents 
    //         console.log(result);
    //     }, (err) => {
    //         console.log('Unable to fetch todos', err);
    //     });
    // // db.close();

    //findOneAndUpdate
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5923ed9a6c91d812cd617aad')
    }, {
            $inc: {
                age: 1
            }
        }).then((result) => {
            console.log('Todos');
            //display all documents 
            console.log(result);
        }, (err) => {
            console.log('Unable to fetch todos', err);
        });
});