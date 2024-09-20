// sort() = methods used to sort elements of an array in place.
// sorts elements as strings in lexocographic order, not alphabetical
// lexocographic = (alphabet + numbers + symbols ) as strings


let fruits = ['apple','orange','banana','coconut','pineapple']

fruits.sort()
console.log(fruits)





let numbers =[1,2,10,9,5,6,7,4,3,8]

numbers.sort((a,b) => a - b)
console.log(numbers)



let even = [2,4,6,8,10]
even.sort((a,b) =>  b - a )
console.log(even)


const people = [{name: 'spongebob', age: 30, gpa:1.5},
    {name: 'squidward', age: 100, gpa:5.5},
    {name: 'sandy', age: 50, gpa:3.6}
]

people.sort((a, b ) => a.name.localeCompare(b.name))
console.log(people)