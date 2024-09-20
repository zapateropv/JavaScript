//Error = An Object that is created to represent a problem that occrurs
//        occur often with user input or establishing a connection

// try { } = Encloses code that might potentially cause an error 
// catch { } = Catch and handle any thrown Errors from try { }
// finally { } = (optional) Always executes. Used mostly for clean up 
//               ex. close files,  close connections, release resources

//NETWORK ERRORS
// PROMISE REJECTION
// SECURITY ERRORS




try {

    let divisor = Number(window.prompt("Enter a divisor"));
    let dividend = Number(window.prompt("Enter a dividend"));
    
    
    
    if(divisor == 0 ){
        throw new Error("enter a number greater than zero")
    }
    
    else if(isNaN(divisor) || isNaN(dividend)){
        throw new Error("enter a valid number")
    }
    let result  = dividend / divisor
console.log(result)
}

catch (error){
console.error(error)
}
