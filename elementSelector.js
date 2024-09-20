// element selectors = Methods used to target and manipulate HTML elements 
//                                     They allow you to select one or multiple HTML elements
//                                     from the DOM (Document Object Model)



// 1. document.getElementById()                 // ELEMENT OR NULL
// 2. document.getElementsClassName()  // HTML COLLECTION
// 3. document.getElementsByTagName() // HTML COLLECTION
// 4. document.querySelector()                    // FIRST ELEMENT OR NULL
// 5. document.querySelectorAll()               // NODELIST



// ---------- getElementById() ----------

const myHeading = document.getElementById("my-heading");
myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "center";


// ---------- getElementsByClassName() ----------


const fruits = document.getElementsByClassName("fruits");



//for(fruit of fruits){
 //   fruit.style.backgroundColor = "Green";
//}

//Array.from(fruits).forEach(fruit => {
  //  fruit.style.backgroundColor = "orange";
//})


// ---------- getElementsByTagName() ----------



const h4ELements = document.getElementsByTagName("h4");
const liElemenets = document.getElementsByTagName("li");


Array.from(h4ELements).forEach(h4 =>{
    h4.style.backgroundColor = "grey";
})




// ---------- querySelector() ----------
const element = document.querySelector(".fruits")

element.style.backgroundColor = "yellow"






// ---------- querySelectorAll() ----------


const cars = document.querySelectorAll(".cars")


cars.forEach(car =>{
    car.style.backgroundColor = 'green'
})


