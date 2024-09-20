// class = provides a more structured and cleaner way to
//  work with objects compared to traditional constructor
// function ex. static, keyword, encapulation, inheritance


class Product {

constructor(name, price){
    this.name = name;
    this.price = price;
}

displayProduct(){
    console.log(`Product: ${this.name}`)
    console.log(`Price: ${this.price.toFixed(2)}`)
}


calculateTotal(tax){
    return this.price + (this.price * tax)
}
}

const tax = 0.05;
const product1 = new Product("shirt",9.99)

product1.displayProduct()
const total = product1.calculateTotal(tax);

console.log(total)



//shoes class

class shoes {
    constructor(size,color,brand){
        this.size = size;
        this.color = color;
        this.brand = brand;
    }


    shoeProduct(){
       console.log(`size:${this.size}`)
       console.log(`color:${this.color}`)
       console.log(`brand:${this.brand}`)
    }
}


let shoe = new shoes('12','white','nike')
shoe. shoeProduct()

//mouse class

class mouse {

    constructor(connection,model){
        this.connection = connection;
        this.model = model;
    }



displayProduct2(){
    console.log(`Product: ${this.connection}`)
    console.log(`Price: ${this.model}`)
}
};

const mice = new mouse('wired','logitech')
mice.displayProduct2();


//monitor

class monitor {

    constructor(hertz,size,brand){
     this.hertz = hertz;
     this.size = size;
     this.brand = brand;
    }

    monitorProduct(){
        console.log(`hertz: ${this.hertz}`)
        console.log(`size: ${this.size}`)
        console.log(`brand: ${this.brand}`)
    }
}

const monitor1 = new monitor('180hz','24 inches','acer')
monitor1.monitorProduct()



//person

class person {
   constructor(height,weight){
    this.height  = height;
    this.weight = weight;
   }


  personName (){
    console.log(`this person has height of ${this.height} and weight of ${this.weight}` )
  }
   
};


const person1 = new person('5 feet 11 inches', '70 kgs');
person1.personName();
