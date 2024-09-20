let fruits = [{name: 'apple', color: 'red',calories: 95,},
              {name: 'orange', color: 'orange',calories: 45,},
              {name: 'banana', color: 'yellow',calories: 105,},
              {name: 'coconut', color: 'white',calories: 159,},
              {name: 'pineapple', color: 'yellow',calories: 37,}
] 

//fruits.push({name: 'grapes', color: 'purple',calories: 62});
//fruits.pop()
//fruits.splice(1,2)



//fruits.forEach(fruit => {
//    console.log(fruit)
//})

// MAPP
//let fruitNames = fruits.map(fruit => 
//    fruit.name
//)
//console.log(fruitNames)

// FILTER

let yellowFruits = fruits.filter(fruit => fruit.color !== 'yellow')
console.log(yellowFruits)

let calorieFruits = fruits.filter(fruit => fruit.calories < 100)
console.log(calorieFruits)


// reduce will return single values

const totalCalories = fruits.reduce((acc, fruit) => acc + fruit.calories,0 );
console.log("Total Calories:", totalCalories);

const minFruit = fruits.reduce((min,fruit) => fruit.calories < min.calories ? fruit : min)
console.log(minFruit.calories)


