"use strict";
// creating function
function describe_city(city, country = 'Default Country') {
    console.log(`${city} is in ${country}`);
}
// Call the function
describe_city('Hyderabad', 'Pakistan');
describe_city('Tokyo', 'Japan');
describe_city('Paris');
