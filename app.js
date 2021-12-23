// function sayHello(nameOfPerson, age) {
//   console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
// }

// sayHello("changuk", 10);
// sayHello("Hyunji", 23);

// function plus(firstNumber, secondNumber) {
//   console.log(firstNumber + secondNumber);
// }

// function divide(firstNumber, secondNumber) {
//   console.log(firstNumber / secondNumber);
// }

// plus(2, 3);
// divide(2, 3);

const player = {
  name: "changuk",
  sayHello: function(otherPersonsName) {
    console.log("hello! " + otherPersonsName + " nice to meet you!");
  },
};

console.log(player.name);
player.sayHello("hyunji");