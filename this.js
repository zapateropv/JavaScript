// this = reference to the object whre THIS is used
//   (the object depends on the imediate content)

//       person.name = this.name


const person1 = {
    name:'patrick',
    age:'15',
    isemployed: true,
    sayHello: function (){
        console.log(`i am ${this.name}`)
    },
  
}

person1.sayHello();
