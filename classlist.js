/* classList = Element property in JavaScript used to interact 
               with an element's list of  classes (CSS classes)
               Allows you to make reusable classes for many elements
               across your web pages


               //add()
               //remove()
               //toggle(Remove if present, Add if not)
               //replce(oldClass, newClass)
               //contains()
*/


const myButton = document.querySelector('#myButton')

//myButton.classList.add('enabled')
//myButton.classList.remove('enabled')


/*

myButton.addEventListener('mouseover', () => {

    myButton.classList.toggle('hover')
})

*/

/*
myButton.classList.add('enabled')

const myH1 = document.querySelector('#myH1')
myH1.classList.add('enabled')


myButton.addEventListener('click', () => {
    

   if(myButton.classList.contains('disabled')){
    myButton.textContent += ' hi'
   }

   else{
    myButton.classList.replace('enabled','disabled')
   }


})

myH1.addEventListener('click', () => {
    

    if(myButton.classList.contains('disabled')){
     myButton.textContent += ' hi'
    }
 
    else{
     myButton.classList.replace('enabled','disabled')
    }
 
 
 })
 
*/

let buttons = document.querySelectorAll('.myButtons')


buttons.forEach(button=>{
    button.classList.add('enabled')
})


buttons.forEach(button => {
    button.addEventListener('mouseover', () =>{
        button.classList.toggle('hover')
    })
})

buttons.forEach(button => {
    button.addEventListener('mouseout', () =>{
        button.classList.toggle('hover')
    })
})


buttons.forEach(button => {
    button.addEventListener('click', () =>{

if(button.classList.contains('disabled')){
button.textContent += 'Hi'
}

else{
    button.classList.replace('enabled','disabled')
}

    })
})








