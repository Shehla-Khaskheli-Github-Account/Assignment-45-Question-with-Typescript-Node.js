"use strict";
let magicians_names = ['Harry Potter', 'Hermione Granger', 'Ron Weasley', 'Albus Dumbledore'];
function copyArray(arr) {
    return [...arr];
}
function make_great(magicians_array) {
    for (let i = 0; i < magicians_array.length; i++) {
        magicians_names[i] = 'The Great ' + magicians_array[i];
    }
}
function show_magicians(magicians) {
    magicians.forEach(element => {
        console.log(element);
    });
}
// Call Function
let copyMagiciansArray = copyArray(magicians_names);
make_great(copyMagiciansArray);
console.log('This is my origional array:');
show_magicians(magicians_names);
console.log('\n\nThis is my modified copy of the array:');
show_magicians(copyMagiciansArray);
