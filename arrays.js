//declars an empty array then populates it.
var animals = [];
animals[0] = 'dog';
animals[1] = 'cat';
animals[2] = 'pig';

console.log(animals);

//adds two elements to end of array
animals.push('cow', 'sheep');
console.log(animals);

//removes first element in the array
animals.shift();
console.log(animals);

//adds element to beginning of array
animals.unshift('goose');
console.log(animals);

//inserts two items starting at index [2]
animals.splice(2,0 ,'duck','chicken');
console.log(animals);

//finds array count and concatenates it with a string
var totalAnimals = animals.length;
console.log("There are " + totalAnimals + " kinds of animals on the farm.");

//changes array name
var barnYardCritters = animals;
console.log(barnYardCritters);
