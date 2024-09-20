//spread operator = ... allows an iterable such as an 
//                     array or string to be expanded
//                      into seperate elements
//                      (unpack the elements)

let numbers = [0, 1, 2, 3, 4, 5];
let maximum =  Math.max(...numbers);
let minimum = Math.min(...numbers);


console.log(minimum);

let username = "Carlsen";
let char = [...username].join(" ");

console.log(char);


let fruits = ["apple", "orange", "banana"]
let vegetable = ["carrots", "celery", "potatoes"]

let foods = [...fruits, ...vegetable];



console.log(foods);
