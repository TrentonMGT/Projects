const expect = require('expect');
const rewire = require('rewire');

//rewire acts exactly like require. With just one 
//difference: Your module will now export a special 
//setter and getter for private variables
var app = rewire('./app');


//Spy allow you to test function in your folder
describe('App', () => {
    //Set db.saveUsers to a spy
    var db = {
        saveUser: expect.createSpy()
    }
    app.__set__("db", db);

    it('should call the spies correctly', () => {
        var spy = expect.createSpy();
        //spy();
        spy('Trenton', 29);
        expect(spy).toHaveBeenCalledWith('Trenton', 29);
    });

    it('should call saveUser with user object', () => {
        var email = 'goingFishing123@example.com';
        var password = '123abc';

        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({email,password});
    });

});