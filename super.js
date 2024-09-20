// super = keyword is used in classes to call a contructor or 
//         access the properties and methods of a parent (superclass)
//         this = this object
//         super = the parent


class Animal{

     constructor(name,age){
       
        this.name = name
        this.age = age
     }

move(speed){
    console.log(`this ${this.name} have a speed of ${speed}`)
}
}

class Rabbit extends Animal {
   
    constructor(name,age,runSpeed){
        super(name, age);
        this.runSpeed = runSpeed
    }

    run(){
        console.log(`${this.name} can run`)
        super.move(this.runSpeed)
    }
}


class Fish extends Animal {

    constructor(name,age,swimSpeed){
        super(name,age);
        this.swimSpeed = swimSpeed
    }
}

class Hawk extends Animal {

    constructor(name,age,flySpeed){
        super(name,age);
        this.flySpeed = flySpeed
    }
}

const rabbit = new Rabbit('rabbit','1','29kph')
const fish = new Fish('fish','2','291kph')
const hawk = new Hawk('Hawk','10','11kph')

console.log(hawk.name)
console.log(hawk.age)
console.log(hawk.flySpeed)

rabbit.run()


//

class bike {
    constructor (brand,color,shifter){
      this.brand = brand;
      this.color = color;
      this.shifter = shifter;
    }


    print(){
        console.log(`this bike is ${this.brand} and has a color of ${this.color} and a shifter of ${this.shifter}`)
    }
    
    
}

class colnago extends bike {

    constructor(brand,color,shifter){
        super(brand,color,shifter)
    }
    
}

const colnago1 = new colnago('colnago','red','shimano');
colnago1.print();
