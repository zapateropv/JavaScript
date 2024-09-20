//forEach() = method used to iterate over the element
//            of an array and apply a specified function (callback)
//
//            array.forEach(callback)
//            element,index, array are provided 


let numbers = [0, 1, 2, 3, 4, 5];

numbers.forEach((number, index) => {
    numbers[index] = number * 2;
});

console.log(numbers); // Output: [0, 2, 4, 6, 8, 10]


let fruits = ["banana","cherry","apple","orange"]

fruits.forEach((fruit1)  => {
    console.log(fruit1)
})







