//call back = a function that is passed  as an argument 
//            to another function
//
//            used to handle asynchronous operations:
//            1. Reading a file
//            2. Network request
//            3. Interacting with databases 

//            hey when you're done call this next

hello(wait) 

function hello(callback){
    console.log("hello");
    callback();
}

function wait(){
    console.log("wait");
   
}

//example 2
add(displayConsole, 1 ,2)

function add(callback, x, y){
    let result = x + y;
    callback(result);
}

function displayConsole(result){
    console.log(result);
}

