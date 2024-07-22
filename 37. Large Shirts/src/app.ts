
// Creating Function
   function make_shirt(size: string = 'Large' , text:string = 'I Love Typescript')  // Large and message is by default valuess
   {
   console.log(`Creating a ${size} shirt with the message: ${text}`);
   }

// Call Function

make_shirt();
make_shirt('Medium');
make_shirt('Small', 'A classic t-shirt never goes out of style');

