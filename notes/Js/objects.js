// 07.07.25 - 1:58 AM 

/* 
Object Definition
    a javascript object is a collection of key-value pairs (also called properties).
    It lets you store related data and behaviours (functions) in a single structure.

    Think of it like a real-world object(e.g a car), with properties (color, speed)
    and methods (drive, stop)
*/

const car = {
    brand: 'Toyota', //property
    speed: 120, 
    color: 'red',

    drive: function(){ //method 
        console.log('Driving...');
    },
    stop: function(){
        console.log('Stopping...');
    }
};


/* 
Keys and Values
    -keys are always strings (or symbols)
    -values can be anything; string, number, boolean, array, function or another object
*/

const person = {
    name: 'userName', 
    age: 25, 
    isHuman: true, 
    skills: ['hunting', 'running'], 
    greet: function(){
        console.log('Hi stranger!');
    }
};


/* 
Accesing Properties
    You can access properties using:
    /*Dot Notation*/
    console.log(person.name); //userName
    
    /*Bracket Notation*/
    console.log(person['age']); //25

    /*use bracket notation when:
     -The key is stored in a variable
     -The key has special characters or spaces*/

    const key = 'isHuman';
    console.log(person[key]); //true 


/*
Adding & Updating Properties
*/
    person.country = 'Nigeria'; //add 
    person.age = 26;           //update 


/*
Deleting Properties
*/
    delete person.isHuman;


/* 
Checking if a Property Exists 
    You can check if an object has a property using the in operator or 
    the hasOwnProperty() method 
*/   
    person.hasOwnProperty('name')    // true 
    console.log('weight' in person) // false 


/*
Looping Through Objects
*/
    for (let key in person){
        console.log(key, person[key]);
    }


/* 
Object Length 
    You can find the length of an Object using Object.keys()
*/
    console.log(Object.keys(person).length); //5


/*
Objects vs Arrays
    /*Arrays are ordered and index-based*/
    const fruits = ['apple', 'banana'];

    /*Objects are unordered and key-based*/
    const fruitMenu = { 
        fruit1: 'apple', 
        fruit2: 'banana'
    };


/* 
Nesting
    Objects can contain other objects 
*/
const user = {
    name: 'userName', 
    location: { 
        country: 'Nigeria', continent: 'Africa'
    }
};
console.log(user.location.country); //Nigeria 


/*
Merging Objects 
    Objects can be merged using Object.assign() or the spread syntax 
    { ...Ob1, Obj2 }
*/
let Obj1 = { name: 'UserName' };
let Obj2 = { age: 23 }; 

let spread_obj = { ...Obj1, ...Obj2 }; //spread method 
let assign_obj = Object.assign({ /*target/new obj*/ }, Obj1, Obj2); //assign method 

console.log(spread_obj); //{ name: 'UserName', age: 23 };
console.log(assign_obj); //same as above 


/* 
Object Methods 
*/
const gamer = {
    name: 'player1',
    wins: 10, 

    record() {
        this.wins++;
        console.log(`${this.name} now has ${this.wins} wins`);
    }
};
gamer.record();


/* 
Object Built-in Methods 
*/
const laptop = { model: 'hp', price: '$400' }

console.log(Object.keys(laptop));      //returns array of keys - [ 'model', 'price' ]
console.log(Object.values(laptop));   //returns array of values - [ 'hp', '$400' ]
console.log(Object.entries(laptop)); //returns array of [key, value] pairs - [ [ 'model', 'hp' ], [ 'price', '$400' ] ]

const new_obj = Object.assign({}, laptop) ;//clones the object
new_obj.company = 'HyperPavilon';
console.log(new_obj); //{ model: 'hp', price: '$400', company: 'HyperPavilon' } 


/* 
Object Destructuring
*/
const { name, age } = person; 
console.log(name); //userName 


/* 
Common Object Creation methods 
*/
// object literal 
const firstObj = { key: 'value' };

// object constructor 
const secondObj = new Object();
secondObj.key = 'value';

console.log(firstObj);  //{ key: 'value' }
console.log(secondObj); //{ key: 'value' }
