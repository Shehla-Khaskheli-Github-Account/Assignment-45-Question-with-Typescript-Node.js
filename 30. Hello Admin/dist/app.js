"use strict";
let userNames = ['Admin', 'Salamat Ali', 'Sheeba Ali', 'Shehla Ali', 'Madiha Ali'];
for (let i = 0; i < userNames.length; i++) {
    if (userNames[i] === 'Admin') {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${userNames[i]}, thank you for logging in again.`);
    }
}
// 2nd Method
// Array Method: forEach() it is used to check every element in an array.
// let userNames :string[] = ['Admin' ,'Salamat Ali' ,'Sheeba Ali' , 'Shehla Ali' ,'Madiha Ali'];
// userNames.forEach(userName => {
//  if(userName === 'Admin'){
//   console.log("Hello admin, would you like to see a status report?");}
//      else{
//        console.log(`Hello ${userName}, thank you for logging in again.`);}
//     
//      })
