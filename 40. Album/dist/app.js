"use strict";
// Creating function 
function make_album(artist_name, album_title, tracks) {
    // Creating Object
    let album = {
        // property:value
        artist_name: artist_name,
        album_title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Call Function 
let album_1 = make_album('Artist 1', 'Title 1');
console.log(album_1);
let album_2 = make_album('Artist 2', 'Title 2');
console.log(album_2);
let album_3 = make_album('Artist 3', 'Title 3', 12);
console.log(album_3);
