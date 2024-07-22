"use strict";
let guest_List = ['Sana', 'Rida', 'Sadaf'];
// for(let i=0; i<guest_List.length; i++)
// {
//     console.log('Dear Miss.' + guest_List[i] +',\n\n It is our pleasure to invite you in our Dinner Party.\n\n Thankyou!\n\n' );
// }
let absent_Guest = 'Sana';
let new_Guest = 'Salamat Ali';
guest_List[0] = new_Guest;
for (let i = 0; i < guest_List.length; i++) {
    console.log('Dear Miss.' + guest_List[i] + ',\n\n It is our pleasure to invite you in our Dinner Party.\n\n Thankyou!\n\n');
}
console.log(`Miss.${absent_Guest} is not coming to the Dinner Party.\n`);
console.log('Good News! we find Big Table so we are inviting 3 more guests.\n');
guest_List.unshift('Sir Kamran Tessori');
guest_List.splice(2, 0, 'Sir Zia Khan'); //Three things in slice (which index number, delete anything, name )
guest_List.push('Sir Hamzah');
for (let i = 0; i < guest_List.length; i++) {
    console.log('Dear Miss.' + guest_List[i] + ',\n\n It is our pleasure to invite you in our Dinner Party.\n\n Thankyou!\n\n');
}
