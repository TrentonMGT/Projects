//Supertest give you the ability to test routes 
//Dependencies
const request = require('supertest');
const expect = require('expect');
//import server.js app property
var app = require('./server').app;

//pass in the app variable 
//This will help us test our routes
// it('should return hello world', (done) => {
//     request(app)
//         .get('/')
//         .expect(404)
//         .expect('Hello World')
//         .end(done);
// });

//pass in the app variable
//pass in a function 
//This will help us test our api route and organize test cases
describe('server', () => {

    describe('GET/', () => {
        it('should return hello world 2', (done) => {
            request(app)
                .get('/')
                .expect(404)
                .expect((res) => {
                    expect(res.body).toInclude({
                        error: 'Page not found'
                    });
                })
                .end(done);
        });
    });

    describe('GET/users', () => {
        //Testing user routes and confirming data exists
        it('should return data of objects', (done) => {
            request(app)
                .get('/users')
                .expect(200)
                .expect((res) => {
                    expect(res.body)
                        .toInclude({
                            name: 'Trenton',
                            age: '29'
                        });
                })
                .end(done);
        });
    });
});