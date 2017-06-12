//import library
const { ObjectID } = require('mongodb');
//local imports
const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

var id = '592d151f2b14d8166395cc08';

// //Passing in an id as a string
// //Query the database and find the documents
// //you are looking for
// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Native Validation
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

//Add validation when I Query the docs
User.findById('592a64c2a809b7c4bb8b947f').then((user) => {
    if (!user) {
        return console.log('Unable to find user');
    }
    console.log(JSON.stringify(user, undefined, 2));
}, (error) => {
    console.log(error);
});

// http://mongoosejs.com/docs/queries.html