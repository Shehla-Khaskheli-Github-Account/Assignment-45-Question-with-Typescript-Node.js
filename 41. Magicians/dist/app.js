"use strict";
// Make a array of magician’s names.
let magicians_names = ['Harry Potter', 'Hermione Granger', 'Ron Weasley', 'Albus Dumbledore'];
// Create a function 
function show_magicians(magicians) {
    magicians.forEach(element => {
        console.log(element);
    });
}
// Call Function
show_magicians(magicians_names);
