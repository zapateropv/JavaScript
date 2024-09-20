// DOM Navigation = The process of navigating through the structure 
//                                  of an HTML document using JavaScript.

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children



// ---------- .firstElementChild ---------

//const ulElements = document.querySelectorAll("ul")



/*
ulElements.forEach(ulElement =>{
    const firstChild = ulElement.firstElementChild;
    firstChild.style.backgroundColor = 'green'
})

*/




// ---------- .lastElementChild ----------
/*
const element = document.getElementById('dessert')
const lastChild = element.lastElementChild;
lastChild.style.backgroundColor = "green"

*/

// ---------- .nextElementSibling ---------
/*
const element = document.getElementById('fruits')
const nextSibling = element.nextElementSibling
nextSibling.style.backgroundColor = "orange"
*/


// ---------- .previousElementSibling ----------

/*
 const element  = document.getElementById("orange")
 const prevsibling = element.previousElementSibling
 prevsibling.style.backgroundColor = "orange"


 */



 // ---------- .parentElement ----------

 /*
 const element = document.getElementById('apple')
 const parent = element.parentElement;
 parent.style.backgroundColor = "orange"
*/




// ---------- .children ----------


/*
const element = document.getElementById('fruits')
const children = element.children;

//children[1].style.backgroundColor = "orange"


Array.from(children).forEach(child =>{
    child.style.backgroundColor = "orange"
}) */