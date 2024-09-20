// nested objects = objects inside of other objects 
//                  allows you to represent more complex data structures 
//                  child objects is enclosed by a parent object

//                  Person{Address{}, ContactInfo{}}
//                  ShoppingCard{Keyboard{}, Mouse{}, Monitor{}}




let person ={

    fullName: 'Spongebob Squarepants',
    age: 30,
    isStudent: true,
    hobbies: ['karate','jellyfishing','cooking'],

    address: {
    street: '124 conch street',
    city: 'bikini bottom',
    country: 'Int. waters'
    }
}

console.log(person.fullName)
console.log(person.hobbies)
console.log(person.address)
console.log(person.address.country)


// example 2

class Person1 {
    constructor(name, age, ...address) {
       this.name = name;
       this.age = age;
       this.address = new Address(...address);
    }
 }
 
 class Address {
     constructor(street, city, country) {
         this.street = street;
         this.city = city;
         this.country = country;
     }
 }
 
 const person2 = new Person1('sponge', 39, '124 st', 'bikini bottom', 'Int waters');
 
 console.log(person2.name);
 console.log(person2.address);
 

 