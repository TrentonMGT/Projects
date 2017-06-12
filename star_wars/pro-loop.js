var inquirer = require('inquirer');

function Programmer(name, position, age, language) {
    this.name = name;
    this.position = position;
    this.age = age;
    this.language = language;

    this.print = function() {
        for (var prop in this) {
            if (typeof this !== 'function') {

                return this.name + "\n" + this.position + "\n" + this.age + "\n" + this.language;
            }
        }
    }
}


var count = 0;

var askQuestion = function() {
    if (count < 2) {
        inquirer.prompt([{
            name: "name",
            message: "What is your name"
        }, {
            name: "position",
            message: "What is your position?"
        }, {
            name: "age",
            message: "what is your age?"
        }, {
            name: "language",
            message: "WHat is your favorite programming language?"
        }]).then(function(answers) {
            var newGuy = new Programmer(answers.name, answers.position, answers.age, answers.language);
            console.log(newGuy.print());
            count++;
            askQuestion();
        });
    } else {
        console.log("Welcome New Devs");
    }
}

askQuestion();
