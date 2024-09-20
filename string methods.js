//string methods= allow you to manipulate and work with text (strings)


let username = " Vincente ";

console.log(username.charAt(1));
console.log(username.indexOf("i")); //if may kaparehas na letter
console.log(username.lastIndexOf("e"));
console.log(username.length);// to count each character of a string

username = username.trim();//used to trim white spaces
console.log(username);

username = username.toUpperCase();
console.log(username);

username = username.toLowerCase();
console.log(username);

username = username.repeat(5);
console.log(username);

result = username.startsWith(" ");// boolean use to determine the first char
console.log(result);

result = username.endsWith("e");
console.log(result);

result = username.includes("n");
console.log(result);

let phoneNumber = "123-456-789";

phoneNumber = phoneNumber.replaceAll("-","/");
console.log(phoneNumber);

phoneNumber = phoneNumber.padStart(15, "1"); //pad string with   0 until it 15 character 
console.log(phoneNumber);


let phoneNumber1 = "123-456-789";
phoneNumber = phoneNumber1.padEnd(15, "0");
console.log(phoneNumber);