
let guest_List :string[] = ['Sana', 'Rida', 'Sadaf' ];

// for(let i=0; i<guest_List.length; i++)
// {
//     console.log('Dear Miss.' + guest_List[i] +',\n\n It is our pleasure to invite you in our Dinner Party.\n\n Thankyou!\n\n' );
// }

let absent_Guest :string = 'Sana';

let new_Guest :string = 'Sir Salamat Ali';

guest_List[0] = new_Guest;

// for(let i=0; i<guest_List.length; i++)
//     {
//         console.log('Dear Miss.' + guest_List[i] +',\n\n It is our pleasure to invite you in our Dinner Party.\n\n Thankyou!\n\n' );
//     }

//  console.log(`\nMiss.${absent_Guest} is not coming to the Dinner Party.\n`);

//  console.log('Good News! we find Big Table so we are inviting 3 more guests.\n');

//   Array main 3 guest add keay hn.
     guest_List.unshift('Sir Kamran Tessori');

     guest_List.splice(2,0,'Sheeba Ali' );   //Three things in slice (which index number, delete anything, name )

     guest_List.push('Madiha Ali')

//   yahan mainy 6 guest k array ko print karwaya hai.

//   for(let i=0; i<guest_List.length; i++)
//     {
//      console.log('Dear.' + guest_List[i] +',\n\n It is our pleasure to invite you in our Dinner Party.\n\n Thankyou!\n\n' );
//     }

// Sorry Guest for not inviting.
// console.log('Sorry! we can not arrange big table, Only Two people will be invited.\n');

//  Yahan mainy guest remove keay hn.
    while(guest_List.length > 2)
    {
        let remove_Guest = guest_List.pop();
    //  console.log(`Sorry ${remove_Guest}, you are not invited for Dinner.\n`);
    }

//   Hamary bachy huay 2 Invited Guest.
//   for(let i=0; i<guest_List.length; i++)
//     {
//       console.log(guest_List[i] +',\n\n You are still invited.\n\n Thankyou!\n' );
//      }

//     Mainy sary guest array se remove kar deay hn
       guest_List.splice(0,2);
       console.log('Guest List');

// Exercise No: 19

// Print a message indicating the number of people you are inviting to dinner.
   console.log(`Total number of Guest Are: ${guest_List.length}`);







