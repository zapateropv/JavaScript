//array = a variable like structure that can hold 
// more than 1 value 


let fruits = ["apple", "orange", "banana"]



//fruits.push("coconut"); .push = push an element to the end
//fruits.pop(); .pop = remove last element

//fruits.unshift("mango"); // add an element to the beginning
//fruits.shift(); // .shift to remove first element

//let numofFruits = fruits.length;
//let index = fruits.indexOf("orange");
//console.log(index);

fruits.sort().reverse();


for(let i =1; i < fruits.length; i++){
    console.log(fruits[i]);
}
//shortcut
// for(let fruit of fruits){
//    console.log(fruit);
//}




console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);


//ARRAY WITH FOR LOOPS

let brands = ["bmw","honda","toyota", "pagani"]

for(let i = brands.length - 1 ; i>=0; i--){
    console.log(brands[i]);
}



//FOR SHORTCUT METHOD 
//ALPHABETICAL ORDER
//REVERSED ORDER


let player =["lebron","curry","kobe","rose"]


player.reverse()

for(let i=0; i<=player.length-1; i++){
    console.log(player[i])
    
}


let brands1 = ["nike","dior","adidas","chanel"]

brands1.forEach(  function(entry){
console.log(entry)
}

)