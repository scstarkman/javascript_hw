//Object 1: Setting up an object for sale items with three properties.
var forSale = {
  title:"slightly used bike for sale.",
  price: 50,
  location:'charleston, sc',
};
console.log('I have a '+ forSale.title);
I have a slightly used bike for sale.


//Object 1: adding a function property in Object.
var stuff = ['bike', 'guitar', 'snowboard'];

var forSale = {
  title:"slightly used bike for sale.",
  price: 50,
  location:'charleston, sc',
  addToStuff:function(x) {
      return stuff.push(x);

  }

};

forSale.addToStuff('giant panda');
console.log(stuff);
["bike", "guitar", "snowboard", "giant panda"]

//Object 3: changed property value in object.
var forSale = {
  title:"slightly used bike for sale.",
  price: 50,
  location:'charleston, sc',

};

console.log('The bike will cost $' + forSale.price + '.');

forSale.price = 25;
console.log('Great Deal:  Bike now costs $' +forSale.price)

The bike will cost $50.
Great Deal:  Bike now costs $25
