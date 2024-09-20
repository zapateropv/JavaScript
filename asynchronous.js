// synchronous = executes line by line consecutively is a sequential manner 
//               code that waits for an operation to complete.

// asynchronous = allows multiple opeerations to be performed concurrently without
//                waiting doesn't block the execution flow and allows the program to
//                continue Handled with : Callbacks, Promises, Async/Await


function function1 (callback){


    setTimeout( () => {console.log('task 1')
                       callback()}, 3000);

}

function function2(){
    console.log("task 2")
    console.log("task 3")
    console.log("task 4")
}



function1(function2)


