let username = window.prompt("enter a username")

username = username.trim().charAt(0).toUpperCase() + username.slice(1).toLowerCase();
console.log(username);