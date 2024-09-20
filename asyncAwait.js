/* Async/Await  = Async = makes a function return a promise
                = Await = makes Async function wait for a promise

                  Allows you to write asynchronous code in synchronous manner
                  Async doesn't have resolve or reject parameters
                  Everything after Await is placed in an event queue

*/





function walkDog (){

    return new Promise((resolve,reject) => {
    
        setTimeout( ()=> {
    
    
            let dog = true;
    
            if(dog){
                resolve('you walk the dog!!')
            }
        
            else{
               reject("YOU DIDN'T WALK THE DOG")
            }
        }, 3000)
       
    })
    }
    
function cleanKitchen(){
    
       return new Promise((resolve,reject) => {
    
        setTimeout(() => {
            let doCleanKitchen = true
    
            if(doCleanKitchen){
                resolve('You did clean the kitchen')
            }
            else {
                   reject('YOU DIDNT CLEAN THE KITCHEN!')
            }
        }, 2000)
       })
    }
    
    
function takeOutTrash (){
    
    return new Promise((resolve,reject) => {
    
    
    setTimeout(() => {
    
    let doTrash = true
    if(doTrash){
        resolve('you have taken the trash out')
    }
    else{
        reject('YOU DIDNT TAKE THE TRASH OUT!')
    }
    }, 5000)
    })
    }
    

async function chores (){

    try {

        const walkdogResult = await walkDog ();
        console.log(walkdogResult)
        
        const doKitchenResult = await cleanKitchen();
        console.log(doKitchenResult)
        
        const trashResult  = await takeOutTrash ();
        console.log(trashResult)


        setTimeout(() => {
            console.log('ALL TASK ARE COMPLETED')
        }, 3500)

    }

    catch(error){
        console.log(error)
    }

}

chores ()
    
    
    