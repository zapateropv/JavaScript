// object =  a collection of related properties and/or methods
//           can represent real world object (people,products,places)
//            
//           object = {key:value
//                     function()}


const person = {

firstName: 'Tyson',
lastName: 'Ngo',
age: '21',
isEmployed: false,
sayHello: () => {console.log('hello')}
    
}

console.log(person.firstName)
console.log(person.lastName)
console.log(person.age)
console.log(person.isEmployed)
person.sayHello()