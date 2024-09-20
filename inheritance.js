// inheritance = allows a new class to inherit properties and methods
//               from an existing class(parent -> child)
//               helps with code reusability



class animals{
    alive = true;

    eat(){
        console.log(`this ${this.name} is eating`)
    }

    sleep(){
        console.log(`this ${this.name} is sleepin`)
    }
}


class rabbit extends animals{
    name = 'rabbit'
}

class fish extends animals{
    name = 'fish'
}

class hawk extends animals{
    name = 'hawk'
}

const rabbit1 = new rabbit();
const fish1 = new fish();
const hawk1 = new hawk();

rabbit1.eat();



//cars

class car {

    color(){
        console.log(`this car is color ${this.color1}`)
    }
}

class bmw extends car {
    color1 = 'red'
}


const bmw1 = new bmw()
bmw1.color()

//bike

class bike {

    brand(){
        console.log(`this bike has a brand name of ${this.name4}`)
    }
}

class felt extends bike {
name4  = 'felt'
}

const felt1 = new felt()
felt1.brand()

