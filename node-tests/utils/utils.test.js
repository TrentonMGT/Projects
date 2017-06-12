//Test file notice the test.js Mocha will target this test file
//Since we are running test files though Mocha we do not need to define mocha
//-----------------------------------------------------------------------------
//A good assersion library for testing 
//Eliminate having to throw am error
const expect = require('expect');

//Import the file I will be testing
const utils = require('./utils.js');

//Behavior driven devolopment BDD.

//group test cases with describe
//adding nested test
describe('utils', () => {

    describe('add function', () => {
        it('should add two numbers', () => {
            var res = utils.add(33, 11);

            expect(res).toBe(44).toBeA('number');
        });
    });

    it('should expect a value', () => {
        var res = utils.add(33, 11);

        expect(res).toNotBeA('22');
    });

    it('should expect a value', () => {
        var res = utils.add(33, 11);

        //expect({name: 'Trenton'}).toEqual({name: 'Trenton'});
        // expect([2, 3, 4]).toInclude(2);
        // expect([2, 3, 4]).toExclude(3);

        expect({
            name: 'Trenton',
            age: 29,
            location: 'Wonderland'
        }).toExclude({
            age: 9
        });
    });

    //Verifing first and last names are correct with proper
    //values of the setName function
    it('Verify first and last names are correct with proper values', () => {
        var user = {
            location: 'Atlanta',
            age: 29
        }
        var res = utils.setName(user, 'Trenton Mcleod');
        expect(user).toEqual(res);

        expect(res).toInclude({
            firstName: 'Trenton',
            lastName: 'Mcleod'
        });
    });

    // a asynce test that mocha will process when done is called
    it('should asynce add two numbers', (done) => {

        utils.asyncAdd(5, 5, (sum) => {
            expect(sum).toBe(10).toBeA('number');
            done();
        });
    });

    it('should asynce square a number', (done) => {

        utils.asyncSquare(1, (sum) => {
            expect(sum).toBe(1).toBeA('number');
            done();
        });
    });
});



// Testing the add function
//toBe or notToBe are great for string, numbers, and bool
//not arrays or objects We can use toEqual and notToEqual for them
it('should add two numbers', () => {
    var res = utils.add(33, 11);

    expect(res).toBe(44).toBeA('number');
});


it('should expect a value', () => {
    var res = utils.add(33, 11);

    expect(res).toNotBeA('22');
});

it('should expect a value', () => {
    var res = utils.add(33, 11);

    //expect({name: 'Trenton'}).toEqual({name: 'Trenton'});
    // expect([2, 3, 4]).toInclude(2);
    // expect([2, 3, 4]).toExclude(3);

    expect({
        name: 'Trenton',
        age: 29,
        location: 'Wonderland'
    }).toExclude({
        age: 9
    });
});

//Verifing first and last names are correct with proper
//values of the setName function
it('Verify first and last names are correct with proper values', () => {
    var user = {
        location: 'Atlanta',
        age: 29
    }
    var res = utils.setName(user, 'Trenton Mcleod');
    expect(user).toEqual(res);

    expect(res).toInclude({
        firstName: 'Trenton',
        lastName: 'Mcleod'
    });
});

// a asynce test that mocha will process when done is called
it('should asynce add two numbers', (done) => {

    utils.asyncAdd(5, 5, (sum) => {
        expect(sum).toBe(10).toBeA('number');
        done();
    });
});

it('should asynce square a number', (done) => {

    utils.asyncSquare(1, (sum) => {
        expect(sum).toBe(1).toBeA('number');
        done();
    });
});

// it('should add two numbers, but throw and error', () => {
//     var res = utils.add(33, 11);
//     throw new Error('Value is not correct');
// });

// it('should add two numbers and display 44', () => {
//     var res = utils.add(33, 11);

//     if (res !== 44) {
//         throw new Error(`Expected 44 but got ${res}.`);
//     }
// });

// it('should square a number', () => {
//     var res = utils.square(11);
// });

// it('should not square a number', () => {
//     var res = utils.square(11);
//     throw new Error(`We have an error in the square function`);
// });

// it('square a number with a condition', () => {
//     var res = utils.square(1);

//     if (res !== 1) { 
//         throw new Error(`We have an error in the square function ${res}`);
//     }
// });



//To auto restart the test file untilize nodemon
//To point nodemon to a specifice file run 
//nodemon --exec 'npm test' or follow my json custom-script 'npm run test-watch' 