/* eventListener = Listen for specific events to create interactive web pages
                   events: keydown, keyup,
                   document.addEventListener(evenet,callback)
            
*/

const myBox= document.getElementById('myBox')
const moveAmout = 10;
let x = 0;
let y = 0;




document.addEventListener('keydown', event => {
 

if(event.key.startsWith("Arrow")){

    switch(event.key){
        case "ArrowUp":
        y -= moveAmout;
        break;

        case "ArrowDown":
        y += moveAmout;
        break;

        case "ArrowLeft":
        x -= moveAmout;
        break;

        
        case "ArrowRight":
        x += moveAmout;
        break;
    }

    myBox.style.top = `${y}px`
    myBox.style.left = `${x}px`
   
}






});















document.addEventListener('keydown', event => {
    myBox.textContent = '😁'
    myBox.style.backgroundColor = 'tomato'
});


document.addEventListener('keyup', event => {
    myBox.textContent =  '😊';
    myBox.style.backgroundColor = 'lightblue'
});



