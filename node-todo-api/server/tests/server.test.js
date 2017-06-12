//----------------TEST SUITE---------------------
//Library imports
const expect = require('expect');
const request = require('supertest');

//Local imports
const { app } = require('./../server');
const { Todo } = require('./../models/todo');
var { ObjectID } = require('mongodb');

//An array of dummy todos seeded data
const todos = [{
    _id: new ObjectID(),
    text: 'First test todo'
}, {
    _id: new ObjectID(),
    text: 'Second test todo'
}];

//Testing life cycle method
beforeEach((done) => {
    Todo.remove({}).then(() => {
        //insert seeded data with mongoose method
        return Todo.insertMany(todos);
    }).then(() => done());
});

describe('POST /todo', () => {
    //asyc test
    it('should create a new todo', (done) => {
        var text = 'test todos';
        //test routes
        request(app)
            .post('/todos')
            .send({ text })
            .expect(200)
            //Test if the body is an object equel to the
            //test text above 
            .expect((res) => {
                expect(res.body.text).toBe(text);
            })
            .end((err, res) => {
                if (err) {
                    return done(err);
                }
                //verify todo was does exist
                Todo.find({ text }).then((todos) => {
                    //test value will be one because  
                    //it one set was added
                    expect(todos.length).toBe(1);
                    expect(res.body.text).toBe(text);
                    done();
                }).catch((error) => done(error));
            });
    });

    //Passing invalid data
    //should not add any todos
    //because of bad data
    it('should not create todo with invalid body data', (done) => {
        request(app)
            .post('/todos')
            .send({})
            .expect(400)
            .end((err, res) => {
                if (err) {
                    return done(err);
                }
                Todo.find().then((todos) => {
                    expect(todos.length).toBe(2);
                    done();
                }).catch((error) => done(error));
            });
    });
});

describe('GET /todos', () => {
    it('should get all todos', (done) => {
        request(app)
            .get('/todos')
            .expect(200)
            .expect((res) => {
                expect(res.body.todos.length).toBe(2);
            })
            .end(done);
    });
});

//Testing the get route id 
describe('GET /todos/:id', () => {
    it('should return todo doc', (done) => {
        request(app)
        //creating the url and turning the object id to a string
            .get(`/todos/${todos[0]._id.toHexString()}`)
            .expect(200)
            .expect((res) => {
                expect(res.body.todos.text).toBe(todos[0].text);
            })
            .end(done);
    });

    it('should return 404 if todo not found', (done) => {
        //submitting an id that in not in the db
        var hexId = new ObjectID().toHexString();

        request(app)
            .get(`/todos/${hexId}`)
            .expect(404)
            .end(done);
    });

    it('should return 404 for non-object ids', (done) => {
        request(app)
            .get('/todos/123abc')
            .expect(404)
            .end(done);
    });
});

//Testing deleted todos route
describe('DELETE /todos/:id', () => {
  it('should remove a todo', (done) => {
    var hexId = todos[1]._id.toHexString();

    request(app)
      .delete(`/todos/${hexId}`)
      .expect(200)
      .expect((res) => {
        expect(res.body.todo._id).toBe(hexId);
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        Todo.findById(hexId).then((todo) => {
          expect(todo).toNotExist();
          done();
        }).catch((e) => done(e));
      });
  });

  it('should return 404 if todo not found', (done) => {
    var hexId = new ObjectID().toHexString();

    request(app)
      .delete(`/todos/${hexId}`)
      .expect(404)
      .end(done);
  });

  it('should return 404 if object id is invalid', (done) => {
    request(app)
      .delete('/todos/123abc')
      .expect(404)
      .end(done);
  });
});