const age = parseInt(prompt("How old are you?")); // <-- js는 여기서 잠깐 멈춰있는 것.

// console.log(isNaN(age));

if (isNaN(age)) {
  console.log("please write a number!");
}
else {
  console.log(age);
}


