// eventListener = Listen for specific events to create interactive web pages
//                 events:click, mouseover, mouseout
//                 .addEventListener(event, arrowFunction)






const myBox = document.getElementById('myBox')
const button = document.getElementById('myButton')


button.addEventListener('click',  (event) => {

    myBox.style.backgroundColor = 'tomato'
    myBox.style.color = 'white'
})

button.addEventListener('mouseover',  (event) => {

    myBox.style.backgroundColor = 'blue'
    myBox.textContent = 'MOUSE OVER'
})



button.addEventListener('mouseout',  (event) => {

    myBox.style.backgroundColor = 'red'
    
    myBox.textContent = 'MOUSE OUT'

})

//previous syntax

/*
myBox.addEventListener('mouseout',  (event) => {

    event.target.style.backgroundColor = 'red'
    
    event.target.textContent = 'MOUSE OUT'

})

*/




