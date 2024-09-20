// rest parameter = (...rest) allow a function work with with a variable number 
// of arguments by bundling them into an array

// spread = expands an array into seperate elements
// rest = bundles seperate elements into  an array


function openFridge(...foods){
console.log(foods);

}
const food1 = "pizza"
const food2 = "hamburger"
const food3 = "hotdog"
const food4 = "sushi"
const food5 = "ramen"

openFridge(food1,food2,food3,food4,food5 );