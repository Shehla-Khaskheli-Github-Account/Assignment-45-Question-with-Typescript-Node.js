
function make_sandwiches(item: string[]){
   console.log('\nMaking your Sandwiches with: ');

   item.forEach( element => console.log("- " + element));

   console.log('Enjoy your sandwich ! \n');
}

// Call Function
   make_sandwiches(['Cheese', 'lettuce', 'Brost']);
   make_sandwiches(['Peanut Butter', 'Katchup']);
   make_sandwiches(['Jelly', 'Katchup']);

