const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//Remove data and doese not send the doc back
//It just show how many where removed
// Todo.remove({}).then((result) => {
//   console.log(result);
// });

//Removes and sends doc back from removed data
// Todo.findOneAndRemove

//Find the id and removes the doc
// Todo.findByIdAndRemove

// Todo.findOneAndRemove({_id: '57c4610dbb35fcbf6fda1154'}).then((todo) => {
//
// });

Todo.findByIdAndRemove('57c4610dbb35fcbf6fda1154').then((todo) => {
  console.log(todo);
});