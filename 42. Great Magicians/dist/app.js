"use strict";
let magicians_names = ['Harry Potter', 'Hermione Granger', 'Ron Weasley', 'Albus Dumbledore'];
function make_great(magicians_array) {
    for (let i = 0; i < magicians_array.length; i++) {
        magicians_names[i] = 'The Great' + magicians_array[i];
    }
}
function show_magicians(magicians) {
    magicians.forEach(element => {
        console.log(`The Great ${element}`);
    });
}
// Call Function
show_magicians(magicians_names);
