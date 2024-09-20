// destructuring = extract values from arrays and objects,
//                 then assign them to variables in a convinient way
//                 [] = to perform array destructuing
//                 {} = to perform object destructuring 

// example 1 swap the values of two variables

let a = 1;
let b = 2;

[a,b] = [b,a]

console.log(a)
console.log(b)

// example 2 swap 2 elements in array

let colors = ["blue", "green", "orange", "yellow"];

[colors[0], colors[3]] = [colors[3], colors[0]];
console.log(colors);

//example 3 assign array elements to variables

let fruits = ['banana','apple','orange','coconut','melon']

const [firstFruit, secondFruit, thirdFruit, ...extraFruits] = fruits;

console.log(firstFruit)
console.log(secondFruit)
console.log(...extraFruits)

//example 4 extract values from objects


const person2 = {

    firstName: "patrick",
    lastName: "star",
    age: 57,
}

let {firstName, lastName, age, job='fry cook'} = person2
console.log(firstName)
console.log(lastName)
console.log(age)
console.log(job)

// example 5 destructure in function parameters

const person1 = {

    firstName: 'spongebob',
    lastName: 'square pants',
    age: '30'
};


function profile1({firstName,lastName,age}){

 console.log(`first name: ${firstName}`)
 console.log(`last name: ${lastName}`)
 console.log(`age: ${age}`)
};

profile1(person1);



