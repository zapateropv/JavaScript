//closure = a function defined inside of anoter function
//          the inner function has access to the variable
//          and scope of the outer function.
//

function outer () {

    let message = 'hello';

    function inner(){
        
        console.log(message)
    }

    inner()
}

outer()

