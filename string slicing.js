const fullName = "Paul Vincent ";


let firstName = fullName.slice(0, 5);
console.log(firstName);

let secondName= fullName.slice(5);
console.log(secondName);

let lastChar = fullName.slice(-2)
console.log(lastChar);

let firstName1 = fullName.slice(0, fullName.indexOf(" "));
console.log(firstName1);

let lastName1 = fullName.slice(fullName.indexOf (" ")+ 1);
console.log(lastName1);


const email = "Bro1@gmail.com"

username = email.slice(0, email.indexOf("@"));
console.log(username);

extension = email.slice( email.indexOf("@") + 1);
console.log(extension);