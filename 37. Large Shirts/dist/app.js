"use strict";
// Creating Function
function make_shirt(size = 'Large', text = 'I Love Typescript') {
    console.log(`Creating a ${size} shirt with the message: ${text}`);
}
// Call Function
make_shirt();
make_shirt('Medium');
make_shirt('Small', 'A classic t-shirt never goes out of style');
