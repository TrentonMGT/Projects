function Character(name, profession, age, gender, strength, hitpoints) {
    this.name = name;
    this.profession = profession;
    this.age = age;
    this.gender = gender;
    this.strength = strength;
    this.hitpoints = hitpoints;

    this.printStats = function() {

        for (var prop in this) {
            if ( typeof this !== 'function') {
                console.log("Noo");
                return this.name +"\n"+ this.profession+"\n"+this.age+"\n"
                +this.gender+"\n"+this.gender+"\n"+this.strength;
            }
            // console.log( prop, '=', this[prop]);
        }
   }
    // this.printStats = function() {
    //     console.log("Name " + this.name + "\nHitpoints:" + this.hitpoints);
    // }
    this.isAlive = function() {
        if (this.hitpoints > 0) {
            console.log(this.name + " is alive!");
            return true;
        } else {
            console.log(this.name + " is dead!");
        }
    }
    this.attack = function(character2) {
        character2.hitpoints -= this.strength;
    }
    this.levelUp = function() {
        this.age += 1;
        this.strength += 5;
        this.hitpoints += 5;
    }
}


var warrior = new Character("Crusher", "Warrior", "Male", 25, 44, 400);
var trenton = new Character("Trenton", "Warrior", "Male", 25, 400, 200);


console.log(warrior.printStats());
console.log();
console.log(trenton.printStats());

trenton.attack(warrior);
warrior.printStats();
warrior.isAlive();
