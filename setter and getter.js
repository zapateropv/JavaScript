// getter  = special method that makes a property reaable
// setter = special method that makes a property writable

//validate and modify a value when reading/writing a property

class Rectangle {

constructor(width,height){
this.width = width
this.height = height


}


set width(newWidth){
    if(newWidth > 0){
        this._width = newWidth
    }

    else{
        console.error('TYPE A VALID NUMBER!!')
    }
}



set height(newHeight){
    if(newHeight > 0){
        this._height = newHeight
    }

    else{
        console.error('TYPE A VALID NUMBER!!')
    }
}

get width(){
    return this._width.toFixed(1)
}

get height(){
    return this._height.toFixed(1)
}


get area(){
    return `${this._height * this._width} cm^2`
}
}

const rectangle = new Rectangle(72,123)

console.log(rectangle.width)
console.log(rectangle.height)
console.log(rectangle.area)


//person


class person {
    constructor(name,age){
        this.name = name;
        this.age = age;

    }



    set name(newName){
        if(typeof newName === 'string'){
            this._name = newName
        }

        else{
            console.log('type a valid letter')
        }
    }

    set age(newAge){
        if(typeof newAge === 'number'){
            this._age = newAge
        }
        else{
            console.log('type a valid age')
        }

        
    }

    get name (){
        return this._name;
    }

    get age(){
        return this._age;
    }
    
    
}

const person1 = new person('tysons',17)
console.log(person1.name)
console.log(person1.age)

