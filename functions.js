//function = a section of reusable code
// declare code once, use it whenever  you want.
//  call the function to execute that code.


let name1 = "Bro";
let age = 16;

function happyBirthday(){
    console.log(`Happy birthday ${name1}`)
    console.log(`You are ${age} yrs old!`)
}


happyBirthday();


function add(x, y){
  
    return x + y;
}

console.log(add(2,+3));




function isEven(number){

   return number % 2 ===0? true: false;
}
console.log(isEven(15));




function isValid(email){

return email.includes("@") ? true: false;
}

console.log(isValid("winter@gmail.com"));


function fruits1(kind){
    console.log(`i ate ${kind}`);
}

fruits1("apple");




