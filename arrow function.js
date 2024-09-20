//arrow function = a consise way to write a function expressions 
//                 good for simple functions that you use only once 
//                 parameters => some code


const numbers = [1, 2, 3, 4, 5, 6, 7]

const squares = numbers.map((element) => Math.pow(element, 3))
const evenNum = numbers.filter((element) => element % 2 === 0);


console.log(squares)
console.log(evenNum);


// syntax let arrow = (argument) => {

//}

let sum = (a, b) => a+b

console.log(sum(5,5));
