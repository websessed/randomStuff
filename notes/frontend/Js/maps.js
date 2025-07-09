
/* 
What is a Map? 
    A map is a built-in Js object that holds key-value pairs, like an object, but 
    with better capabilities
*/
//create a map 
const Map = new Map();

//or 

const map = new Map([
    ['name', 'userName'], 
    ['age', 24], 
    [true, 'boolKey']
])


/* 
Basic Methods 
*/
//set(key, value) - adds or updates an entry
function greet(){};
map.set('language', 'javascript'); 
map.set(greet, 'hello :(');

//get(key) - retrieves a value by key 
console.log(map.get('language')); //'javascript'
console.log(map.get(greet));     //'hello'

//has(key) - checks if a key exists 
console.log(map.has(true)); //true 

//delete(key) - removes a key-value pair 
map.delete('language'); //deletes [ 'language', 'javascript' ]

//clear() - empties the whole map 
map.clear(); console.log(map) //Map(0) {}

//size - gives the number of entries 
console.log(map.size); //3 (if working with original size)


/*
Iterating a Map  
*/
//loop with for...of
for (let [key, value] of map) {
    console.log(`${key} => ${value}`); //name => userName, age => 24, true => boolKey
}

//loop with forEach 
map.forEach((value, key) => {
    console.log(`${key} => ${value}`); //same as for...of 
});

//get only keys
for (let key of map.keys()){
    console.log(key); //name, age, true 
}
//get only values 
for (let value of map.values()){
    console.log(value); //userName, 24, boolKey 
}
//get only entries 
for (let [key, value] of map.entries()){
    console.log(key, value); //same as for...of 
}


/* 
Nesting Maps
*/
const userVisits = new Map();

function recordVisit(user, site) {
    //if userVisits has no user, add a user
    if (!userVisits.has(user)){
        userVisits.set(user, new Map());
    }

    //get the users who visits 'site'
    const sites = userVisits.get(user);
    //increment the user's visit count to this site, starting at 0 if it's their first visit
    sites.set(site, (sites.get(site) || 0) + 1);
}


/* 
WeakMaps 
    if you want a map that doesn't prevent its object keys from being garbage collected:
*/
const weakMap = new WeakMap(); 
const weakMapObj = {};

weakMap.set(weakMapObj, 'some value');
//! weakmaps only allow objects as keys and are not iterable 


/*
Maps vs Objects 
*/
//Map accepts objects as keys 
const objkey = { id: 1 };
map.set(objkey, 'value for object key');

console.log(map.get(objkey)); //value for object key 
//you can't do this safely with normal objects because {} keys get coerced to strings ('[object Object]')