const age = parseInt(prompt("How old are you?")); // <-- js는 여기서 잠깐 멈춰있는 것.

// console.log(isNaN(age));

if (isNaN(age) || age < 0) {
  console.log("please write a real positive number!");
}
else if (age < 18) {
  console.log("You are too young.");
}
else if (age <= 50) {
  console.log("You can drink");
}
else if (age <= 80) {
  console.log("You should exercise.");
}
else if (age > 80) {
  console.log("You can do whatever you want.")
}


