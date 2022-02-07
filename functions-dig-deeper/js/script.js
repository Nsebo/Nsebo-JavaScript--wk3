// normal function
const showPetName = function (name) {
  console.log("The pet name is " + name);
};

// fat arrow function
const showPetNameTwo = (name, age) =>
  console.log("The pet name is" + " " + name + " The age is" + " " + age); // + concatenation

showPetName("Dino");
showPetNameTwo("Bingo", "40");

// global scope can be used anywhere

const cityName = " Oslo";

function showMeCityName() {
  // 1st time
  console.log("The city name is: " + cityName);
}

showMeCityName();

console.log(cityName); // 2nd time

function isScania() {
  if (cityName === " Oslo") {
    // 3rd time
    console.log(cityName + " is scandinavian "); // fourth time
  } else {
    console.log("not scandinavian");
  }
}
// local scope is use inside the function

function showMeCityName() {
  const cityName = " Oslo";
  console.log("The city name is: " + cityName);
}

// block scope is anything between curly braces
//{
//  const name = "nse";
// const car = "tesla";
// let someFunctionNumber = 10;
//   var someAge = 29;
//   console.log(name);
//   console.log(car);
// }

// console.log(car);
// console.log(someAge);
// console.log(someFunctionNumber);

const myObject = {
  // parent
  number: 10, // sibling
  myContainer: function () {
    console.log(this.number);
  },
};

myObject.myContainer();

// ternary operator is a easier method of writing less code condition ?

const pet = "Dino";

// let isDangerous;

// if (pet === "Dino") {
//   isDangerous = true;
// } else {
//   isDangerous = false;
// }

// const isDangerous = pet === "Dino" ? true : false;
