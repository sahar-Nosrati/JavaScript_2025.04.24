"use strict";

// syntax error
// const firstName;

// type error
// const age = 64;
// for(element of age){
//   console.log(element);
// }

// reference error
// console.log(favoritFruit);
// const favoritFruit = "Pineapple";

const errorTest = function () {
  const fruits = ["pineapple", "fig", "cherry", "grap"];

  for (let element of fruits) {
    try {
      console.log(element);
      if (element.includes("g")) {
        throw new customError("It contains 'g'");
      }
      console.log(`Nice fruit${element}`);
    } catch (error) {
      console.error(error.message);
      console.error(error.name);
      console.error(error.stack);
    } finally {
      console.log("...finally😁🦆");
    }
  }
};

errorTest();

function customError(message) {
  this.name = "Custom Error";
  this.message = message;
  this.stack = `${this.name} : ${this.message}`;
}
