function car (make,model,year,color){
 
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color
    this.drive = function(){console.log(`u r driving a ${this.model}`)}
}

const car1 = new car("ford","mustang","2020","yellow")

console.log(car1.make)
console.log(car1.model)
console.log(car1.year)
console.log(car1.color)
console.log(car1)
car1.drive()



function roadbike (size,color,brand,shifter){
    this.size = size;
    this.color = color;
    this.brand = brand;
    this.shifter = shifter;

}

const bike = new roadbike('41','white','spanker','shimano')
console.log(bike.size)
console.log(bike.color)
console.log(bike)







