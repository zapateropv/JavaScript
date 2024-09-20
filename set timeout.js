// setTimeout() = function in javascript that allows you to schedule
//                the execution of a function after an amount of time (milliseconds)
//                times are approximate (varies based on the workload of the javascript runtime env.)
//


function sayHello (){

    console.log('hello')
}

setTimeout(sayHello, 1000)


//arrow function

const timeoutId =  setTimeout( () => console.log('w chat'), 2000)

clearTimeout(timeoutId);

