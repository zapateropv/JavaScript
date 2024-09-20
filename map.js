// .map()= accepts a callback and appllies that function
//         to each element of an array, then return a new array



const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(square);
const cubes = numbers.map(cube);



console.log(cubes);


function square(element){
    return Math.pow(element, 2);
}

function cube(element){
    return Math.pow(element, 3);
}


//example 2

const students = ["spongebob", "patrick","squidwards","sandy"]

const pupils = students.map(upperCase);

console.log(pupils);

function upperCase(element){
 return  element.toUpperCase();
}

const dates = ["2024-1-10","2025-2-20","2026-3-30"]

const haha = dates.map(formattedDates)
console.log(haha)


function formattedDates(element){

const parts = element.split("-")

return`${parts[1]}/${parts[2]}/${parts[0]}}`

}



let cars = ['bmw','chevrolet','ferari','corvet']

let cars1 = cars.map(car => {
   return car.toUpperCase()
})
console.log(cars1)
