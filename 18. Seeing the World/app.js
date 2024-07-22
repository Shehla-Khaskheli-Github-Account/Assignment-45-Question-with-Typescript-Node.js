"use strict";
// Store the locations in a array. Make sure the array is not in alphabetical order.
let places = ['Italy', 'Germany', 'Eifel Tower', 'Times Square', 'Autobham'];
// Print your array in its original order.
console.log('\nOriginal Array: ' + places);
// Print your array in alphabetical order without modifying the actual list.
console.log('\nCopy: ' + [...places].sort()); // ... means ==> copy of origional array
// Show that your array is still in its original order by printing it.
console.log('\nOriginal Array: ' + places);
// Print your array in reverse alphabetical order without changing the order of the original list.
console.log('\nCopy: ' + [...places].sort().reverse());
// Show that your array is still in its original order by printing it again.
console.log('\nOriginal Array: ' + places);
// Reverse the order of your list. Print the array to show that its order has changed.
console.log('\nOriginal Array: ' + places.reverse());
// Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log('\nOriginal Array: ' + places.reverse());
// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log('\nOriginal Array: ' + places.sort());
// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log('\nOriginal Array: ' + places.sort().reverse());
