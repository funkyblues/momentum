const player = {
  name: "changuk",
  points: 10,
  fat: true,
};

// print
console.log(player);
console.log(player.name);
console.log(player["name"]);

// update
player.fat = false;
console.log(player);
player.points = player.points + 15;

// add
player.lastName = "potato";
console.log(player);