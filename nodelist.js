/* NodeList = static collection of HTML Element by(id,class,element)
              Can be created by using querySelectorAll()
              Similar to an array, but no (map, filter, reduce)
              NodeList won't update to automatically reflect changes

*/

let buttons = document.querySelectorAll('.myButtons');

/*
buttons.forEach(button => {
    button.style.backgroundColor = 'green';
    button.textContent += ' :>'
});

*/

/*
buttons.forEach(button => {
    button.addEventListener('click', () => {
        button.style.backgroundColor = 'tomato'
    })
})
    */

/*

buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.backgroundColor = 'tomato'
    })
})

buttons.forEach(button => {
    button.addEventListener('mouseout', () => {
        button.style.backgroundColor = 'blue'
    })
})

*/

 //STEP 1

const newButton = document.createElement('button')

//STEP 2
newButton.textContent = 'Button 5'
newButton.backgroundColor = 'tomato'
newButton.classList = 'myButtons'


//STEP 3
document.querySelector('.div').append(newButton)

buttons = document.querySelectorAll('.myButtons')
console.log(buttons)

//REMOVE AN ELEMENT IN NODELIST 

buttons.forEach(button  => {
    button.addEventListener('click', () => {
        button.remove()
        buttons = document.querySelector('.myButtons')
        console.log(buttons)
    })
})

