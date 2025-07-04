
/* 
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

/*--

/* 
Keys and Values:
    * keys are always strings (or symbols)
    * values can be anything; string, number, boolean, array, function or another object
*/

const person = {
    name: 'person', 
    age: 25, 
    isHuman: true, 
    skills: ['hunting', 'running'], 
    greet: function(){
        console.log('Hi stranger!');
    }
};

