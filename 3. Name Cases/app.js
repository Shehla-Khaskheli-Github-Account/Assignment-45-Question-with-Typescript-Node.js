"use strict";
// Lowercase:
let person_Name = "Shehla Ali";
console.log("lowercase: ", person_Name.toLowerCase());
//Uppercase:
console.log("uppercase: ", person_Name.toUpperCase());
//Titlecase:
console.log("titlecase: ", person_Name.replace(/\bw/g, c => c.toUpperCase()));
