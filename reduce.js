// .reduce() = reduce the element of an array to a single value


const price = [10, 5, 20, 40, 50]

const priceTotal = price.reduce((acc,next) => acc + next , 0)
console.log(priceTotal)



//example


const grades = [100, 70, 75, 80 ,85]

const total = grades.reduce(max);


console.log(total);

function max(accumulator1, element){

 return Math.max(accumulator1, element)
}