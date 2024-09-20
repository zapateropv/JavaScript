//STEP 1 CREATE THE ELEMENT
const newH1 = document.createElement("h1");


// STEP 2 ADD ATTRIBUTES/PROPERTIES
newH1.textContent = "i like pizza";
newH1.id = 'myH1'
newH1.style.color = 'orange'
newH1.style.textAlign = 'center'


//STEP 3 APPEND ELEMENT TO DOM
//document.body.append(newH1);
//document.body.prepend(newH1);
document.getElementById("box2").append(newH1)
//document.getElementById("box2").prepend(newH1)

//const box2 = document.getElementById('box2')
//document.body.insertBefore(newH1, box2)

//REMOVE HTML ELEMENT
document.getElementById('box2').removeChild(newH1)


//LIST ITEMS


// STEP 1 CREATE THE ELEMENT
const newListItems = document.createElement("li")


// STEP 2 ADD ATTRIBUTES/PROPERTIES
newListItems.textContent = 'coconut'
newListItems.id = 'coconut'
newListItems.style.fontWeight = 'bold'
newListItems.style.backgroundColor = 'green'

// STEP 3 APPEND THE ELEMENT
//document.getElementById('fruits').prepend(newListItems)
const orange = document.getElementById('orange')
document.getElementById('fruits').insertBefore(newListItems,orange)


//const listItems = document.querySelectorAll('#fruits li'). 
//document.getElementById('fruits').insertBefore(newListItems, listItems[1])


