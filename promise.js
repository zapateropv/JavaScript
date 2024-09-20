/* Promise = An object that manages asynchronous operations.
             Wrap a Promise  Object around {asynchronous code}
             'I promise to return a value'
             PENDING -> RESOLVED OR REJECTED
             new Promises ((resolve,reject) => {asynchronous code})


DO THESE CHORES IN ORDER 

1. WALK THE DOG
2. CLEAN THE KITCHEN
3. TAKE OUT TRASH
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


walkDog().then(value => {console.log(value); return cleanKitchen()})
         .then(value => {console.log(value); return takeOutTrash ()} )
         .then(value => {console.log(value); setTimeout( ()=> console.log("ALL TASK ARE COMPLETED"),6000)})
         .catch(error => console.log(error));


