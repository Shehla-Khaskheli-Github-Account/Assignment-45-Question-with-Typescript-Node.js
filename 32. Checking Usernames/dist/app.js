"use strict";
// Make a list of five or more usernames called current_users.
let current_users = ['SaLamat Ali', 'SheHla Ali', 'SheEba Ali', 'MaDiha Ali', 'MaliHa Ali'];
// Make another list of five usernames called new_users.
let new_users = ['Irha', 'SheHla Ali', 'Alaya', 'Anaya', 'MaliHa Ali'];
new_users.forEach(new_users_name => {
    let lowerCase = new_users_name.toLowerCase();
    if (current_users.map(c_user => c_user.toLowerCase()).includes(lowerCase)) {
        console.log(`The username ${new_users_name} is not available. Please write a different username`);
    }
    else {
        console.log(`The username ${new_users_name} is available.`);
    }
});
