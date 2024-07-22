
// Make a array of magician’s names.
   let magicians_names :string[] = ['Harry Potter', 'Hermione Granger', 'Ron Weasley', 'Albus Dumbledore'];

// Create a function 
   function show_magicians(magicians:string[]){

    magicians.forEach(element=> {

     console.log(element);

   });
}

// Call Function
   show_magicians(magicians_names); 

