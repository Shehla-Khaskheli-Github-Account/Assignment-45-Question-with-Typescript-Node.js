"use strict";
let alien_color = 'green';
// write an if-else chain.
// If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
if (alien_color === 'green') {
    console.log("Player just earned 5 points for shooting the alien.");
}
else {
    console.log("player just earned 10 points");
}
// If the alien’s color isn’t green, print a statement that the player just earned 10 points.
alien_color = 'yellow';
if (alien_color === 'green') {
    console.log("Player just earned 5 points for shooting the alien.");
}
else {
    console.log("Player just earned 10 points");
}