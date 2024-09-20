//function expression = a way to define functions as values or variables


const number = [1, 2, 3, 4, 5, 6];


const squares = number.map(function(element){
    return Math.pow(element,2);
})


const evenNum = number.filter(function(element){
    return element % 2 === 0;
})

const total = number.reduce(function(accumulator,element){
    return accumulator + element;
})


console.log(evenNum);